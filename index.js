const {Client,Account, Databases, ID, Query} = Appwrite;
const projectId = '65548d105f64bd3f068a';
const databaseId = '';
const collectionId = '';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(projectId);  // Corrected method name

const account = new Account(client)


function register(event){
    account.create(
        ID.unique(),
        event.target.elements['register-email'].value,
        event.target.elements['register-password'].value,
        event.target.elements['register-username'].value
    ).then(response => {
        console.log(response);
        //create a database

        account.createEmailSession(
            event.target.elements['register-email'].value,
            event.target.elements['register-password'].value
        )
    }).catch(error =>{console.error(error)})
    event.preventDefault()

}

