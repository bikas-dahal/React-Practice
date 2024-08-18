import { Client, Account, Databases, Storage, Avatars } from 'appwrite'

export const appwriteConfig = {
    // projectId: '66b2fa610036d01bd323',
    projectId: import.meta.env.VITE_APPWRIE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRIE_URL,
    // url: 'https://cloud.appwrite.io/v1',
}



export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);


export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
