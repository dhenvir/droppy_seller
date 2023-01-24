export function importAssetIconAsImage(imageName: string, extension: string, setIcon: any) {
  import(`assets/images/icons/${imageName}.${extension}`)
    .then((image) => {
      setIcon(image.default);
    })
    .catch((err) => {
      console.error(Object.freeze(err));
      setIcon(null);
    });
}

function pesoFormat(amount: number = 0, decimals: number = 2) {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);
}

function dateFormat(date: string, formatString: string = "MMM dd yyyy | hh:mm a") {
  const { format } = require("date-fns");
  return format(new Date(date), formatString);
}

function unslug(phrase: any, delimiter: string = " ") {
  const words = (phrase || "").toString().trim().split(delimiter);
  return words
    .map(
      (word: string) => (word || "").slice(0, 1).toUpperCase() + (word || "").slice(1).toLowerCase()
    )
    .join(" ");
}

function haveselectedproducts(data: string) {
  const rows = JSON.parse(data);
  for (var i = 0; i < rows.length; i++) {
    if (rows[i].add > 0) {
      return true;
    }
  }
  return false;
}

export { pesoFormat, dateFormat, unslug, haveselectedproducts };
