const marketsFilterString = "marketsFilter";
const exchangesFilterString = "exchangesFilter";
const favoriteMarketsFilterString = "favoriteMarketsFilter";

const marketsField = "markets-field";
const exchangesField = "exchanges-field";
const favoriteMarketsField = "favorite-markets-field";

const errorMessage = "Unable to update value";

async function UpdateMarketsFilter() {
  try {
    User.set(marketsFilterString, document.getElementById(marketsField).value);
    await User.save();
  } catch (error) {
    console.log(errorMessage);
  }
}

async function UpdateExchangesFilter() {
  try {
    User.set(exchangesFilterString, document.getElementById(exchangesField).value);
    await User.save();
  } catch (error) {
    console.log(errorMessage);
  }
}

async function UpdateFavoriteMarketsFilter() {
  try {
    User.set(favoriteMarketsFilterString, document.getElementById(favoriteMarketsField).value);
    await User.save();
  } catch (error) {
    console.log(errorMessage);
  }
}

async function UpdateUserValues() {
  try {
    document.getElementById(marketsField).value = User.get(marketsFilterString);
    document.getElementById(exchangesField).value = User.get(exchangesFilterString);
    document.getElementById(favoriteMarketsField).value = User.get(favoriteMarketsFilterString);
  } catch (error) {
    console.log(errorMessage);
  }
}
