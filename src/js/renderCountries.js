const renderCountry = (country) => {
  const countryCard = document.querySelector(".country-card");
  const countryList = document.querySelector(".country-card__list");

  const countryFlagContainer = document.createElement("div");
  const countryFlag = document.createElement("img");
  const countryContainerImage = document.querySelector(".country-card__image");

  countryList.innerHTML = "";

  const createListItem = (title, content) => {
    const item = document.createElement("li");
    const itemTitle = document.createElement("h3");
    const itemContent = document.createElement("p");

    item.append(itemTitle, itemContent);

    itemTitle.textContent = title;
    itemContent.textContent = content;

    item.classList.add("country-card__list-item");
    itemTitle.classList.add("country-card__list-title");

    return item;
  };

  const countryName = createListItem("Country name:", country.name.common);
  const countryContinent = createListItem(
    "Country continent:",
    country.continents[0]
  );
  const countryCapital = createListItem("Country capital:", country.capital[0]);
  const countryPopulation = createListItem(
    "Country population:",
    country.population
  );
  const extractedLanguages = Object.values(country.languages).toString();
  const countryLanguage = createListItem(
    "Country language:",
    extractedLanguages
  );
  const [currenciesToArray] = Object.entries(country.currencies);
  console.log(country);
  console.log(currenciesToArray[0][0]);
  const countryCurrency = createListItem(
    "Currencies:",
    currenciesToArray[1].name
  );
  const countryTimeZones = createListItem("Timezones:", country.timezones[0]);
  const capitalizedWeekDay =
    country.startOfWeek.slice(0, 1).toUpperCase() +
    country.startOfWeek.slice(1);
  const countryWeekday = createListItem("Weekday:", capitalizedWeekDay);
  const countryDrivingSide = createListItem("Driving side:", country.car.side);

  countryFlag.src = country.flags.png;

  countryList.append(
    countryFlagContainer,
    countryName,
    countryContinent,
    countryCapital,
    countryPopulation,
    countryLanguage,
    countryCurrency,
    countryTimeZones,
    countryWeekday,
    countryDrivingSide
  );

  countryFlagContainer.append(countryFlag);
  countryFlag.classList.add("country-card__container");
};

export default renderCountry;
