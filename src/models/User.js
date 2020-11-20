export default class User {

    constructor(userFirstName, userLastName, email, avatar){
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.email = email;
        this.avatar = avatar;
    }
}

// the JSON below is from the PostIt API
// included here to remind me what the structure should be
// [
//     {
//   "firstname": "John",
//   "lastname": "Doe",
//   "email": "john.doe@example.com",
//   "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
// }
// ]