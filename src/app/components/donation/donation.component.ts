import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './donation.component.html',
})
export class DonationComponent {
  amounts = [100, 251, 501, 1001, 2101, 5001];
  selectedAmount: number | null = null;
  customAmount = '';
  showCopied = false;

  upiId = 'MSVASUDHAIVANIDAMFOUNDATION.eazypay@icici';

  selectAmount(amount: number) {
    this.selectedAmount = amount;
    this.customAmount = '';
  }

  onCustomInput() {
    this.selectedAmount = null;
  }

  get finalAmount(): number {
    return this.customAmount ? +this.customAmount : this.selectedAmount ?? 0;
  }

  copyUpi() {
    navigator.clipboard.writeText(this.upiId).then(() => {
      this.showCopied = true;
      setTimeout(() => (this.showCopied = false), 2000);
    });
  }
}
