var template=`
    
    [UDATA]

    <style scoped>
    .prof_intest div{
        color:#777;
        font-size:21px;
        margin:10px 0;
    }

    .prof-feedback{
        text-align:justify;
        width:90%;
        font-size:18px;
    }

    .prof-feedback a{
        color:red;
    }
    .prof-feedback a:hover{
        text-decoration:underline
    }
    .error u{
        color:red;
    }

    h3.unauth{
        border:1px solid red;
        padding:20px;
        color:red;
    }

    </style>
`

import Abstract from './abstract.js'
import {Application} from '../app'
import moment from 'moment'
import services from '../services.js'
import locale from '../locale/profile.loc'

export class Profile extends Abstract{

    _loc=locale()

    constructor(target,params)
    {
        super(target,params)
        
    }
    
    mounted()
    {
    }

    emptyOrDefault(value){
        
        return value ? value : "---"
    }

    currentUser()
    {
        //return Application.user.current();
        return window.Application.user;
    }

    getDays(){
        debugger;
        let usr=this.currentUser();
        return moment().diff(moment(usr.policies),'days')
    }

    locale(){

        return this._loc
      
    }

    fillUserData(){
      
        let user=this.currentUser();

        let content="";

        let loc=this.locale()[Application.language.current];
        
        if(!user.loa2)
        {
            content=`${loc['loa2_feedback']}`
        }
        else if(!user.role)
        {
            content=`${loc['unauthorized_feedback']}`
        }
        else{

            let messages=[]

            if(!user.policies){
                messages.push(`${loc["disciplinare_feedback"]}`)
            }
            
            if(!user.itsec){
                messages.push(`${loc["itsec_feedback"]}`)
            }

            content=messages.join("<br><br>")
        }

        if(!user.isAuthorized)
        {
            services.user.notifyStatus(user).then(res=>{
                console.log(res)
            })
        }
      
        var html=`<div class="prof_intest">
        <p>${user.name} ${user.surname}</p>
        
        <p class="prof-feedback">${content}</p>
        </div>
        <div class="prof_lab">
        <p>Username</p>
        </div>
        <div class="prof_val">
        <p class="username">${this.emptyOrDefault(user.uid)}</p>
        </div>
        <div class="prof_lab">
        <p>${loc["email"]}</p>
        </div>
        <div class="prof_val">
        <p class="email">${this.emptyOrDefault(user.email)}</p>
        </div>
        <div class="prof_lab">
        <p>${loc["email_alt"]}</p>
        </div>
        <div class="prof_val">
        <p>${this.emptyOrDefault(this.showList(user.mailAlternates))}</p>
        </div>
        <div class="prof_lab">
        <p>${loc["phone"]}</p>
        </div>
        <div class="prof_val">
        <p>${this.emptyOrDefault(user.phone)}</p>
        </div>
        <div class="prof_lab">
        <p>${loc["role"]}</p>
        </div>
        <div class="prof_val">
        <p>${this.emptyOrDefault(user.role)}</p>
        </div>
        <div class="prof_lab">
        <p>${loc["exp"]}</p>
        </div>
        <div class="prof_val">
        <p>${this.parseDate(user.expiration)}</p>
        </div>`
       
       
        return html;

    }

    showList(items)
    {
        var list=Array.isArray(items) ? items : [items];
        return list.join("<br>")
    }

    parseDate(date){
       
       

        if(!date) return "---"
        //if(date=="nolimit") return (Application.language.current=="ITA" ? "nessuna" :"never")
        if(date.indexOf("-")<0) return (Application.language.current=="ITA" ? "nessuna" :"never")
        /*if(date.indexOf("-")>-1)
        {
            date=date.split("-").reverse().join("")
        } */
        date=date.split("-").reverse().join("")

        let date_format={'ITA':"DD-MM-YYYY",'ENG':"MM-DD-YYYY"}
        try
        {
            return moment(date).format(date_format[Application.language.current])
        }
        catch{
            return "---"
        }
      
    }
    
    getContent(){
        let html=this.fillUserData()
        return template.replace(/\[UDATA\]/g,html);
    }
}