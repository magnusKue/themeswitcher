
# this is currently not used. Updates are done directly in main because for some fucking reason it doesnt work if i do it here >:(

### Firefox
if [ "$pywalfox" == "true" ]; then
    pywalfox update
    echo "pywalfox updated"
else
    echo "Skipping pywalfox"
fi