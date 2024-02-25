import i18n from 'i18next';
//middleware detects current language
import Languagedetector from 'i18next-browser-languagedetector' 
import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend'

// initialize i18 instance
i18n
.use(Languagedetector)
.use(initReactI18next)
// .use(Backend)
.init({
    debug: true,
    lng:"en", // default language English. Change to fr to view changes
    resources: {
        en: {
            translation: {
                appName: 'Task Management Application',
                deadline: 'Deadline',
                status: 'Status',
                completed:'Completed',
                pending: 'Pending',
                search_with_task_title:'Search with task title',
                task_not_found: 'Task not found',
                cancel:'cancel',
                appBar: {
                    profile: 'Profile',
                    login: 'Login',
                    logout: 'Logout'
                },
                navBar: {
                    task_list:'Task List',
                    add_task:'Add Task'
                },
                tasks: {
                    title: 'Title',
                    description: 'Description',
                    add_task: 'Add Task'
                },
                alert: {
                    message_delete: 'Are you sure you want to delete this item?',
                    confirm:'Confirm',
                    cancel: 'Cancel'
                },
                validation: {
                    title_required: 'Title is required'
                },
                error: {
                    heading: 'Oops!',
                    description: 'Sorry, an unexpected error has occurred.'
                }
            }

        },
        fr: {
            translation: {
                deadline: 'date limite',
                status:'Statut'
            }

        }
    }
}) 

