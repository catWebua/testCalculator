import { Component } from '@angular/core';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

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
  toggleValue: boolean = false;
  amount: number = 1000;
  isDropdownOpen: boolean = false;
  isDropdownOpen1: boolean = false;

  currencies: Currency[] = [
    { name: 'TUSD (Test US Dollar)', apr: 15 },
    { name: 'TEUR (Test Euro)', apr: 12 },
    { name: 'TCNY (Test Chinese Yuan)', apr: 13 },
    { name: 'TINR (Test Indian Rupee)', apr: 20 },
    { name: 'TBRL (Test Brazilian Real)', apr: 33 },
    { name: 'TIDR (Test Indonesian Rupiah)', apr: 21 },
    { name: 'MKLH (Test US Dollar)', apr: 23 },
    { name: 'YJIO (Test Euro)', apr: 16 },
    { name: 'TCNY (Test Chinese Yuan)', apr: 10 },
    { name: 'TINR (Test Indian Rupee)', apr: 30 },
    { name: 'TBRL (Test Brazilian Real)', apr: 35 },
    { name: 'TIDR (Test Indonesian Rupiah)', apr: 28 },
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
    // Implement the logic to format the amount
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

  updateSelectedCurrency(currency: Currency) {
    this.selectedCurrency = currency;
    this.isDropdownOpen1 = false;
  }

  toggleDropdown() {
    this.isDropdownOpen1 = !this.isDropdownOpen1;
  }
  toggleDropdown1() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  selectPeriod(period: number) {
    this.selectedPeriod = period;
    this.isDropdownOpen1 = false;
  }
}
