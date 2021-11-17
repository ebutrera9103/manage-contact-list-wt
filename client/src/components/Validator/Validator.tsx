/* eslint-disable no-useless-escape */
export const validatorEmpty = (items: any[]) => {
    return items.every((item) => item !== null || item !== '');
}

export const validatorEmail = (email: string) => {
    const re: any = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());

}