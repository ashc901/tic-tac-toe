curl "apiUrl" \
--include \
--request PATCH \
--header "Authorization: Bearer ${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
  "old": "'"${OLDPW}"'"
  "new": "'"${NEWPW}"'"
}'

echo
