import Home from './components/Home.vue';

/* Lazy Load for Pages Components */
// const CI = resolve => {
//     require.ensure(['./components/Other.vue'], () => {
//         resolve(require('./components/Other.vue'));
//     })
// }


/* Routes Pages Configurations */
export const routes = [
    {   path: '', name: 'home', 
        components: {
            default: Home
        }
    },
    { path: '*', redirect: '/' } /* Otherwise redirect to '/' */
]