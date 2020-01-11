import map from 'lodash/map';

const domain = 'http://localhost:5000';

export function searchParams(params) {
  return map(params, (value, key) => `${key}=${value}`).join('&');
}

/**
 * Parses JSON responses for easier consumption.
 *
 * The returned promise behaves as follows:
 * * For "OK" responses (2xx status codes)
 *   * If the body has JSON, it resolves to the JSON itself
 *   * If the body has no JSON (i.e. is empty), it resolves to null
 * * For all other responses, it rejects with an `Error` object that contains
 *   the following properties:
 *   * `isFromServer`: Set to true, indicating it is a server error
 *   * `response`: The complete response, for reference if required
 *   * `responseJson`: The response body pre-converted to JSON for convenience
 *
 * @param {Object} response
 * @returns {Promise<{}>}
 */
export async function parseJsonResponse(response) {
  let json = null;
  try {
    json = await response.json();
  } catch (e) {
    // TODO Do something if response has no, or invalid JSON
  }

  if (response.ok) {
    return json;
  } else {
    let error = new Error(response.statusText);
    error.isFromServer = true;
    error.response = response;
    error.responseJson = json;

    throw error;
  }
}

/**
 * Performs an API request.
 *
 * @param {string} method - 'GET', 'POST' etc.
 * @param {string} path
 * @param {Object} [body]
 * @param {Object} [options] - `fetch` options other than `method` and `body`
 * @returns {Promise<{}>} As returned by {@link parseJsonResponse}
 */
export async function apiRequest(method, path, body = null, options = {}) {
    //path = `${domain}${path}`;
  let defaultHeaders = {
    // 'Accept': 'application/json',
    // 'Content-Type': 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest'
  };

  let defaultOptions = {method};
  if (body) {
    defaultOptions['body'] = JSON.stringify(body);
  }

  const { headers, params, ...remainingOptions } = options;
  const finalOptions = Object.assign(
    defaultOptions,
    { headers: Object.assign(defaultHeaders, headers) },
    remainingOptions
  );

  if (params) {
    path += `?${searchParams(params)}`;
  }

  console.log(path, finalOptions);
  const response = await fetch(path);
  console.log('Resp');
  return parseJsonResponse(response);
}