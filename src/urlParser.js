export function urlParser(urlFormat, urlInstance) {
  // Parse URL format to extract both constant and variable names
  const formatParts = urlFormat.split("/");

  // Parse the URL instance to extract both the parts of the endpoint and the query parameters
  let [endpoint, queryParams] = urlInstance.split("?");

  // Extract the endpoint parts
  endpoint = endpoint.split("/");

  // Match url format variable names with endpoint parts and store the coincidences
  const values = {};

  for (let i = 0; i < formatParts.length; i++) {
    const formatPart = formatParts[i];

    if (formatPart.startsWith(":")) {
      const varName = formatPart.substring(1);

      // Preserve numbers (assuming only integers)
      if (!isNaN(endpoint[i])) {
        endpoint[i] = parseInt(endpoint[i]);
      }

      values[varName] = endpoint[i];
    }
  }

  // If there are query parameteres get the pairs
  if (queryParams) {
    const queryPairs = queryParams.split("&");

    queryPairs.forEach((pair) => {
      const [key, value] = pair.split("=");

      let uriComponent = decodeURIComponent(value);

      // Preserve numbers (assuming only integers)
      if (!isNaN(uriComponent)) {
        uriComponent = parseInt(uriComponent);
      }

      values[key] = uriComponent;
    });
  }

  return JSON.stringify(values, null, " ");
}
