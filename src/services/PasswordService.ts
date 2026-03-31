export function passwordService(valor: number): string {
    let password: string = '';
    let caracteres: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

    for (let i = 0; i < valor; i++) {
        let index = Math.floor(Math.random() * caracteres.length);
        password += caracteres.charAt(index);
    }

    return password;
}