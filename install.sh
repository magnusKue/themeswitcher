#if [[ "$EUID" -ne 0 ]]; then
#   echo "This script must be run as root. Please use sudo." 
#   exit 1
#fi

script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

## Copy spicetify desktop file

read -p "Do you want to use spicetify (This will create a spicetify desktop file)? (y/n): " answer
case "$answer" in
    [yY][eE][sS]|[yY]|[jJ])
        if [[ -e "/usr/share/applications/spicetify.desktop" ]]; then
            echo -e "[ERROR]: File already exists - nothing to do!\n"
        else
            echo "[INFO]: Copying desktop file to /usr/share/applications"
            sudo cp $script_dir/assets/spicetify.desktop /usr/share/applications/
            echo -e "-> success!\n"
        fi

        ;;
    [nN][oO]|[nN])
        echo -e "\nSkipping.. please re-run this script if you change your mind!\n"
        ;;
    *)
        echo -e "Invalid input. Please enter y or n.\n"
        exit 0;
        ;;
esac


## Copy Rofi config
read -p "The script will now set your Rofi theme. This will overwrite your 'config.rasi'. Do you want to continue? (y/n): " answer
case "$answer" in
    [yY][eE][sS]|[yY]|[jJ])
        if [[ -e "$HOME/.config/rofi/config.rasi" ]]; then
            echo "[INFO]: Copying config file to ~/.config/rofi/config.rasi"
            mv "$HOME/.config/rofi/config.rasi" "$HOME/.config/rofi/config.rasi.backup"
            cp "$script_dir/assets/config.rasi" "$HOME/.config/rofi/"
            echo -e "-> success!\n"
        else
            echo "[ERROR]: '~/.config/rofi/config.rasi' doesnt exist. Please install rofi!"
        fi

        ;;
    [nN][oO]|[nN])
        echo -e "\nSkipping.. please re-run this script if you change your mind!\n"
        ;;
    *)
        echo "Invalid input. Please enter y or n."
        exit 0;
        ;;
esac

## add style import in swaync
read -p "Do you want to install the dotsfiles needed for application themes to work? !!!THIS WILL OVERWRITE EXISTING CONFIGS!!! (You will not be able to use your own without modification)? (y/n): " answer
case "$answer" in
    [yY][eE][sS]|[yY]|[jJ])
        cp -rf "$script_dir/assets/dots/"* "$HOME/Downloads/"
        echo "done!"
        ;;
    [nN][oO]|[nN])
        echo -e "\nSkipping.. please re-run this script if you change your mind!\n"
        ;;
    *)
        echo -e "Invalid input. Please enter y or n.\n"
        exit 0;
        ;;
esac


## Copy pywal templates
read -p "The script will now copy the neccessary pywal-template files. Do you want to continue? (y/n): " answer
case "$answer" in
    [yY][eE][sS]|[yY]|[jJ])
        if [[ -d "$HOME/.config/wal/templates/" ]]; then
            echo "[INFO]: Copying template files to ~/.config/wal/templates/"
            cp "$script_dir/pywal-templates/"* "$HOME/.config/wal/templates/"
            echo -e "-> success!\n"
        else
            echo "[ERROR]: '~/.config/wal/templates' doesnt exist. Please install pywal!"
        fi

        ;;
    [nN][oO]|[nN])
        echo -e "\nDone!"
        exit 0;
        ;;
    *)
        echo "Invalid input. Please enter y or n."
        exit 0;
        ;;
esac

echo -e "\nCreating wallpaper cache at ~/.cache/wallpapers/rofi-downscales/"
mkdir -p "$HOME/.cache/wallpapers/rofi-downscales/"

echo "Install is finished."
