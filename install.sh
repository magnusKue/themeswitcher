#if [[ "$EUID" -ne 0 ]]; then
#   echo "This script must be run as root. Please use sudo." 
#   exit 1
#fi

#
# TODO:
# [ ] Dotfiles contain paths including username
# [ ] 
#
# DONE:
# [x] rofi 
# [x] waybar (except fonts)
# [ ] swaync
# [ ] gtk


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

s
read -p "Do you want to copy hyprshade shaders and rofi themes for waybar features? (y/n): " answer
case "$answer" in
    [yY][eE][sS]|[yY]|[jJ])
        if [[ -d "/usr/share/hyprshade/" ]]; then
            sudo cp -rf "$script_dir/assets/hyprshaders/"* "/usr/share/"
        else
            echo "[ERROR]: '/usr/share/hyprshade' doesnt exist. Please install hyprshade!"
        fi
        
        if [[ -d "/usr/share/rofi/" ]]; then
            sudo cp -rf "$script_dir/assets/rofi-themes/"* "/usr/share/rofi/themes/"
        else
            echo "[ERROR]: '/usr/share/rofi' doesnt exist. Please install rofi!"
        fi

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


## install dotfiles
read -p "Do you want to install the dotsfiles needed for application themes to work? !!!THIS WILL OVERWRITE EXISTING CONFIGS!!! (You will not be able to use your own without modification)? (y/n): " answer
case "$answer" in
    [yY][eE][sS]|[yY]|[jJ])
        cp -rf "$script_dir/assets/dots/"* "$HOME/.config/"
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
