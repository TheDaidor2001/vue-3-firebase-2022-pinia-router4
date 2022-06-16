import {defineStore} from 'pinia'
import { auth } from '../firebase.config';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import router from '../router'

export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: null,
        loadingUser: false,
        loadingSesion: false
    }),
    actions: {
        async registerUser(email, password){
            this.loadingUser = true
            try {
                const {user} = await createUserWithEmailAndPassword(auth, email, password);
                this.userData = {email: user.email, uid: user.uid}

            } catch (error) {
                console.log(error);
            }finally{
                this.loadingUser = false
            }
        },
        async singUser(email, password){
            this.loadingUser = true
            try {
                const {user} = await signInWithEmailAndPassword(auth, email, password);
                this.userData = {email: user.email, uid: user.uid}

            } catch (error) {
                console.log(error)
            }finally{
                this.loadingUser = false
            }
        },
        async logout(){
            try {
                await signOut(auth)
                this.userData = null
                router.push('/login')
            } catch (error) {
                console.log(error)
            }
        },
        currentUser(){
            return new Promise((resolve, reject) => {
                const unsuscribe = onAuthStateChanged(auth, user => {
                    if(user){
                        this.userData = {email: user.email, uid: user.uid}
                    }else{
                        this.userData = null
                    }
                    resolve(user);
                    unsuscribe();
                }, e => reject(e))
            })
        }
    }
});

