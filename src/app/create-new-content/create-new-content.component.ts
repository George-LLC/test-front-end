import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig, SelectItem } from 'primeng/api';

@Component({
	selector: 'app-create-new-content',
	templateUrl: './create-new-content.component.html',
	styleUrls: ['./create-new-content.component.css']
})

export class CreateNewContentComponent implements OnInit {

	formCreateNew: FormGroup;
	items: SelectItem[];

	item: string;
	value4: number = 50;
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
			name: new FormControl('', [Validators.required]),
			nmbrWriters: new FormControl(''),
			selectedOpt: new FormControl(''),
			value4: new FormControl(''),
			// LastName: new FormControl("", [Validators.required]),
			// MiddleName: new FormControl("", [Validators.required]),
			// CompanyName: new FormControl("", [Validators.required]),
		});

		this.items = [];
		for (let i = 1; i <= 15; i++) {
			this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
		}
	}

}
