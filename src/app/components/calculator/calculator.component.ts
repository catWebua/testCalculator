import { Component } from '@angular/core';

interface Currency {
  name: string;
  apr: number;
}


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  amount: number = 1000;

  currencies: Currency[] = [
    { name: 'TUSD (Test US Dollar)', apr: 15 },
    { name: 'TEUR (Test Euro)', apr: 12 },
    { name: 'TCNY (Test Chinese Yuan)', apr: 13 },
    { name: 'TINR (Test Indian Rupee)', apr: 20 },
    { name: 'TBRL (Test Brazilian Real)', apr: 33 },
    { name: 'TIDR (Test Indonesian Rupiah)', apr: 21 },
  ];
  selectedCurrency: Currency = this.currencies[0];
  selectedPeriod: number = 1;
  searchText: string = '';

  get filteredCurrencies(): Currency[] {
    return this.currencies.filter(currency => currency.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  filterCurrencies() {
    this.selectedCurrency = this.filteredCurrencies[0];
  }

  formatAmount() {

  }

  validateAmount(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'];
    if (
      event.key !== 'Tab' &&
      !allowedKeys.includes(event.key) &&
      !/\d/.test(event.key)
    ) {
      event.preventDefault();
    }
  }

  decreaseAmount() {
    if (this.amount >= 1000) {
      this.amount -= 1000;
    }
  }

  increaseAmount() {
    if (this.amount < 1000000) {
      this.amount += 1000;
    }
  }

  calculateProfit(): number {
    const selectedCurrency = this.currencies.find(
      currency => currency.name === this.selectedCurrency.name
    );
    if (!selectedCurrency) {
      return 0;
    }

    const apr = selectedCurrency.apr;
    const monthlyRate = apr / 12;
    const totalProfit = this.amount * monthlyRate * this.selectedPeriod;
    return Number(totalProfit.toFixed(2));
  }
}
