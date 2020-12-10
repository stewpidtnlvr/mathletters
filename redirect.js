var enforce = "{{ site.enforce_ssl }}";
if ((enforce == window.location.host) && (window.location.protocol != "http:"))
  window.location = window.location.toString().replace(/^https:/, "http:");
