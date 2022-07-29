const getXpath = (type, value) => {
  const xpath = `//android.widget.${type}[@${value}]`
  return xpath
}

module.exports = { getXpath }
