export const sortMarketCapAscending = function (a, b) {
  if (a.marketCap < b.marketCap) {
    return -1;
  } else if (a.marketCap > b.marketCap) {
    return 1;
  }
  return 0;
};

export const sortMarketCapDescending = function (a, b) {
  if (a.marketCap < b.marketCap) {
    return 1;
  } else if (a.marketCap > b.marketCap) {
    return -1;
  }
  return 0;
};

export const sortCurrentPriceAscending = function (a, b) {
  if (a.current_price < b.current_price) {
    return -1;
  } else if (a.current_price > b.current_price) {
    return 1;
  }
  return 0;
};

export const sortCurrentPriceDescending = function (a, b) {
  if (a.current_price < b.current_price) {
    return 1;
  } else if (a.current_price > b.current_price) {
    return -1;
  }
  return 0;
};

export const sortHourlyPriceChangeAscending = function (a, b) {
  if (a.hourly_price_change < b.hourly_price_change) {
    return -1;
  } else if (a.hourly_price_change > b.hourly_price_change) {
    return 1;
  }
  return 0;
};

export const sortHourlyPriceChangeDescending = function (a, b) {
  if (a.hourly_price_change < b.hourly_price_change) {
    return 1;
  } else if (a.hourly_price_change > b.hourly_price_change) {
    return -1;
  }
  return 0;
};

export const sortCurrentWeeklyPriceChangeAscending = function (a, b) {
  if (a.price_change_7d < b.price_change_7d) {
    return -1;
  } else if (a.price_change_7d > b.price_change_7d) {
    return 1;
  }
  return 0;
};

export const sortCurrentWeeklyPriceChangeDescending = function (a, b) {
  if (a.price_change_7d < b.price_change_7d) {
    return 1;
  } else if (a.price_change_7d > b.price_change_7d) {
    return -1;
  }
  return 0;
};

export const sortCurrentHourlyPriceChangeDescending = function (a, b) {
  if (a.price_change_7d < b.price_change_7d) {
    return 1;
  } else if (a.price_change_7d > b.price_change_7d) {
    return -1;
  }
  return 0;
};

export const sortRankAscending = function (a, b) {
  if (a < b) {
    return -1;
  } else if (a.value > b) {
    return 1;
  }
  return 0;
};

export const sortRankDescending = function (a, b) {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  }
  return 0;
};

export const sortNameAscending = function (a, b) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  }
  return 0;
};

export const sortNameDescending = function (a, b) {
  if (a.name < b.name) {
    return 1;
  } else if (a.name > b.name) {
    return -1;
  }
  return 0;
};

export const sortDailyPriceChangeAscending = function (a, b) {
  if (a.hourly_price_change < b.hourly_price_change) {
    return -1;
  } else if (a.hourly_price_change > b.hourly_price_change) {
    return 1;
  }
  return 0;
};

export const sortDailyPriceChangeDescending = function (a, b) {
  if (a.price_change_percentage_24h < b.price_change_percentage_24h) {
    return 1;
  } else if (a.price_change_percentage_24h > b.price_change_percentage_24h) {
    return -1;
  }
  return 0;
};

export const sortTotalVolumeAscending = function (a, b) {
  if (a.total_volume < b.total_volume) {
    return -1;
  } else if (a.total_volume > b.total_volume) {
    return 1;
  }
  return 0;
};

export const sortTotalVolumeDescending = function (a, b) {
  if (a.total_volume < b.total_volume) {
    return 1;
  } else if (a.total_volume > b.total_volume) {
    return -1;
  }
  return 0;
};
