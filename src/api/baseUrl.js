export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

function getQueryStringParameterByName(name) {
  const url = new URL(window.location.href);
  if (url.searchParams.get(name)) {
    return url.searchParams.get(name) === 'true';
  } else {
    return false;
  }
}
