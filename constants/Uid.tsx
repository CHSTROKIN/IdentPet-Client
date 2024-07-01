import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';

function generateUsername() {
    return `user-${Math.floor(Math.random() * 10000)}`;
}

async function getDeviceUUID() {
    let uuid = await AsyncStorage.getItem('uuid');
    if (!uuid) {
        uuid = uuidv4();
        await AsyncStorage.setItem('uuid', uuid);
    }
    return uuid;
}

async function getDeviceUsername() {
    let username = await AsyncStorage.getItem('username');
    if (!username) {
        username = generateUsername();
        await AsyncStorage.setItem('username', username);
    }
    return username;
}

export {
    getDeviceUUID, getDeviceUsername
}
