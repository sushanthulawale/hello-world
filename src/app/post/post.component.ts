import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts:any[];
  

  constructor(private service: PostService) { 
    
  }
  ngOnInit(){
    this.service.getAll()
    .subscribe(posts => this.posts=posts);
  }

  createPost(input: HTMLInputElement)
  {
    let post={title: input.value};
    this.posts.splice(0,0,post);
    input.value='';

    this.service.create(post)
      .subscribe(
      newPost => { post['id']=newPost.id;
      //this.posts.splice(0,0,post)
      },(error: AppError) =>{
        this.posts.splice(0,1);
      if(error instanceof BadInput){
        //
      }
      else throw error;
    });
  }

  updatePost(post){
    this.service.update(post)
    .subscribe(updatedPost =>{
      console.log(updatedPost);
    });
  }

  deletePost(post){ 
    let index=this.posts.indexOf(post);
    this.posts.splice(index,1);
    
    this.service.delete(post)
    .subscribe(
    //   () =>{
    //   let index=this.posts.indexOf(post);
    //   this.posts.splice(index,1);
    // }
    null , (error : AppError) =>{
      this.posts.splice(index,0,post); 

      if(error instanceof NotFoundError)
      {
        alert('This post already deleted.');
      }
      else throw error;      
    });
  }
}
