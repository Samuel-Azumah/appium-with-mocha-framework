const getXpath = (value) => {
  const xpath = `//android.widget.TextView[@${value}]`
  return xpath
}

module.exports = { getXpath }
