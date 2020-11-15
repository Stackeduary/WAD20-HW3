export default class Post {

    constructor(postText, time, numOfLikes, authorImage, authorName, attachment){
        this.postText = postText;
        this.postTime = postTime;
        this.numOfLikes = numOfLikes;
        this.authorImage = authorImage;
        this.authorName = authorName;
        this.attachment = attachment;
    }
}