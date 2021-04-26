import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { PrimeNGConfig, SelectItem } from 'primeng/api';

@Component({
	selector: 'app-create-new-content',
	templateUrl: './create-new-content.component.html',
	styleUrls: ['./create-new-content.component.css']
})

export class CreateNewContentComponent implements OnInit {


  showModal = false;

	formCreateNew: FormGroup;
	items: SelectItem[];
	max_words;

  percent;
  writers;
  budget;
  price;

  item: string;
	value4: number;
	selectedOptions = [
		{
			name: 'Bilingual',
			text: '(add 20%)',
			add: 20
		},
		{
			name: 'Proof-reading',
			text: '(add 10%)',
			add: 10
		},
		{
			name: 'Copy-editinig',
			text: '(add $20)',
			add: 20
		}
	]


	constructor(private primengConfig: PrimeNGConfig) {

	}

	ngOnInit() {
		this.primengConfig.ripple = true;

		this.formCreateNew = new FormGroup({
			source: new FormControl('', [Validators.required]),
			nmbrWriters: new FormControl('', [Validators.required]),
			selectedOpt: new FormControl('', [Validators.required]),
			value4: new FormControl('', [Validators.required, this.maxNumber.bind(this)]),
			inputTextarea: new FormControl('', [Validators.required, this.maxWords.bind(this)])
		});

		this.items = [];
		for (let i = 1; i <= 15; i++) {
			this.items.push({ label: '' + i, value: i });
		}
	}


	onSubmit() {
		console.log(this.formCreateNew.value);
	}

	maxWords(control: FormControl) {
		let a = control.value.split(' ');
		let b = [];
		for (let i = 0; i < a.length; i++) {
			if (a[i] !== '') {
				b.push(a[i]);
			}
		}

		this.max_words = b.length;
    console.log(this.max_words);

    if (this.max_words > 0 && this.max_words <= 30) {
			return false;
		} else {
			return { "lengthError": true };
		}
	}


	maxNumber(control: FormControl) {
	  let a = control.value;
	  this.value4 = a;
    console.log(a);
    if (a >= 5 && a <= 500) {
      this.budget = a;
      this.fullPrice();
      return false;
    } else {
      this.budget = undefined;
      this.fullPrice();
      return { "error": true };
    }
  }

  chengeDropdown(e) {
    this.fullPrice();
	  return this.writers = e;
  }

  onCklickRadiobutton(e) {
	  if (e === 'Bilingual') {
      this.percent = 20;
      this.fullPrice();
      return;
    }
	  if (e === 'Proof-reading') {
      this.percent = 10;
      this.fullPrice();
      return;
    }
	  if (e === 'Copy-editinig') {
      this.percent = '20';
      this.fullPrice();
	    return;
    }
  }

	fullPrice() {
		if (this.budget === undefined) {
		  this.budget = 0;
    }if (this.percent === undefined) {
      this.percent = 0;
    }if (this.writers === undefined) {
      this.writers = 1;
    }
		if (typeof this.percent === 'string') {
      return this.price = (this.budget * this.writers) + (+this.percent);
    } else {
      return this.price = (this.budget * this.writers) + (this.budget * this.writers * this.percent / 100);
    }
	}

}
