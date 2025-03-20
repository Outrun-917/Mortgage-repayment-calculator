// Form selectors
const $mortgageAmountInput = document.getElementById("mortgage-amount-input");
const $mortgageTermInput = document.getElementById("mortgage-term-input");
const $interestRateInput = document.getElementById("interest-rate-input");
const $radioButtons = document.querySelectorAll(".radio-button-wrapper input[type='radio']")

const $formSubmitButton = document.querySelector(".form-submit-button");

// Result selectors
const $resultsIdleWrapper = document.querySelector(".results-idle-wrapper");
const $resultsActiveWrapper = document.querySelector(".results-active-wrapper");
const $monthlyFeedback = document.querySelector(".monthly-feedback");
const $termFeedback = document.querySelector(".term-feedback");

function calculateFees(mortgageAmount, mortageTerm, interestRate) {
  const totalFees = mortgageAmount * interestRate;
  const total = mortgageAmount + totalFees;
  const totalMonths = mortageTerm * 12;
  const totalPerMonth = total / totalMonths;
  const totalInterestPerMonth = totalFees / totalMonths

  console.log(totalFees);
  console.log(total);
  console.log(totalMonths);
  console.log(totalPerMonth);
  console.log(totalInterestPerMonth)

  handleResult(total, totalPerMonth, Math.round(totalInterestPerMonth))
}

function handleResult(total, totalPerMonth, totalInterestPerMonth) {
    if ($radioButtons[0].checked) {
        $monthlyFeedback.textContent = totalPerMonth
    } else {
        $monthlyFeedback.textContent = totalInterestPerMonth
    }
    $termFeedback.textContent = total

    $resultsIdleWrapper.classList.add("hidden")
    $resultsActiveWrapper.classList.remove("hidden")
}

$formSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const mortgageAmount = parseFloat($mortgageAmountInput.value);
  const mortageTerm = parseInt($mortgageTermInput.value); // 10 ans -> convertir en main
  const interestRate = parseFloat($interestRateInput.value / 100); // 5% === 0.05

  calculateFees(mortgageAmount, mortageTerm, interestRate);
});
