import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { Comment } from '../shared/comment';
import { visibility, flyInOut, expand } from '../animations/app.animation';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    visibility(),
    flyInOut(),
    expand()

  ]
})

export class ProductdetailComponent implements OnInit {

  product: any = Product;
  productcopy: any = Product;
  productIds: string[];
  prev: string;
  next: string;
  errMess: string;

  commentForm: FormGroup;
  comment: Comment;

  visibility = 'shown';

  @ViewChild('fform') commentFormDirective: NgForm;

  formErrors: any = {
    'author': '',
    'comment': ''
  };

  validationMessages: any = {
    'author': {
      'required':      'Name required.',
      'minlength':     'Name must be at least 2 characters long.',
      'maxlength':     'Name cannot be more than 50 characters long.'
    },
    'comment': {
      'required':      'Comment required.',
      'minlength':     'Comment must be at least 2 characters long.',
      'maxlength':     'Comment cannot be more than 150 characters long.'
    }
  };



  constructor(
    private productservice: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') public BaseURL: any
  ) {
      this.createForm();
  }

  ngOnInit() {
    this.productservice.getProductIds()
      .subscribe(productIds => this.productIds = productIds);
      this.route.params
        .pipe(switchMap((params: Params) => this.productservice.getProduct(params['id'])))
        .subscribe(product => { this.product = product; this.productcopy = product; this.setPrevNext(product.id); },
          errmess => this.errMess = <any>errmess );
  }

  setPrevNext(productId: string) {
    const index = this.productIds.indexOf(productId);
    this.prev = this.productIds[(this.productIds.length + index - 1) % this.productIds.length];
    this.next = this.productIds[(this.productIds.length + index + 1) % this.productIds.length];
  }

  goBack(): void {
    this.location.back();
  }

  createForm() {
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)] ],
      rating: ['', Validators.required ],
      comment: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)] ]
    });
    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // set or reset validation message
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }


  onSubmit() {
    this.comment = this.commentForm.value;
    this.comment.date = new Date().toISOString();
    this.product.comments.push(this.comment);
    console.log(this.comment);
    this.commentForm.reset({
      author: '',
      rating: '',
      comment: ''
    });
    this.commentFormDirective.resetForm();
    this.productcopy.comments.push(this.comment);
    this.productservice.putProduct(this.productcopy)
      .subscribe(product => {
        this.product = product; this.productcopy = product;
      },
      errmess => { this.product = null; this.productcopy = null; this.errMess = <any>errmess; });
  }

}
