import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
userData:any;
  constructor(private fbauth:AngularFireAuth,private ngZone:NgZone,
    private router:Router) 
    {
        this.fbauth.authState.subscribe(user =>{
          if(user)
          {
            this.userData=user;
            localStorage.setItem("user",this.userData.email)
          }
        })
     }

     SignIn(email,password)
     {
       return this.fbauth.auth.signInWithEmailAndPassword(email,password)
       .then((result)=>{
         this.router.navigate(['/'])
       }).catch((error)=>{
         window.alert(error.message);
       })
     }

    SignUp(email,password)
    {
      return this.fbauth.auth.createUserWithEmailAndPassword(email,password)
      .then((result)=>{
        this.router.navigate(['/'])
      }).catch((error)=>{
        window.alert(error.message);
      })
    } 

    Logout()
    {
      return this.fbauth.auth.signOut().then(()=>{
        localStorage.removeItem("user")
        this.router.navigate(['/login'])
      })
    }
    isSignIn()
    {
      const user=localStorage.getItem("user");
      return user?true:false
    }

    getUser()
    {
      const user=localStorage.getItem("user");
      return user?user:null;
    }
}
