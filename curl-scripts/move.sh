# patch request
curl "apiUrl" + "/games/${ID}" \
--include \
--request PATCH \
--header "Authorization: Bearer ${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
  
}'
