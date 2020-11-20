export default class Profile {

    constructor(id, firstName, lastName, avatar){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;
    }
}

// the JSON below is from the PostIt API
// included here to remind me what the structure should be
// [
//   {
//     "id": 1,
//     "firstname": "John",
//     "lastname": "Doe",
//     "email": "john.doe@example.com",
//     "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
//   },
//   {
//     "id": 2,
//     "firstname": "Gordon",
//     "lastname": "Freeman",
//     "avatar": "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
//   },
//   {
//     "id": 3,
//     "firstname": "John",
//     "lastname": "Doe",
//     "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
//   },
//   {
//     "id": 4,
//     "firstname": "Bruce",
//     "lastname": "Wayne",
//     "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
//   },
//   {
//     "id": 5,
//     "firstname": "Richard",
//     "lastname": "Stallman",
//     "avatar": "https://images.unsplash.com/photo-1553798194-cc0213ae7f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
//   }
// ]