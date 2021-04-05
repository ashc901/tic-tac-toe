curl "apiUrl" + "/games" \
--include \
--request POST \
--header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{}'
