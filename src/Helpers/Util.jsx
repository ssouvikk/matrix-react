import Configs from '../Configs';
export class Util {
    static randomColor() {
        return '#' + Math.random().toString(10).substring(2, 8)
    }

    static randomChar() {
        return (Math.random()).toString(36).substring(2, 8)
    }

    static randomId() {
        return `${Math.random()}`.substring(2)
    }

    static getBrokenName(fullName) {
        const parts = fullName.split(' ')
        const firstName = parts[0]
        const lastName = parts.length > 1 ? fullName.substring(fullName.indexOf(' ') + 1) : ''
        return { firstName, lastName }
    }

    static getImageByPath(path) {
        return `${Configs.API_ROOT}/${path}`
    }

    static getFileName(name) {
        return name.substring(0, name.lastIndexOf('.')) + '-signed-by-SignMate' + name.substring(name.lastIndexOf('.'))
    }

    static generateSingleRecipient = () => ({
        name: null,
        email: null,
        id: this.randomId(),
        showAccessCode: false,
        color: this.randomColor(),
        accessCode: this.randomChar(),
    })
}