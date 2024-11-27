precision highp float;
varying vec2 v_texcoord;
uniform sampler2D tex;

const int LUMINOSITY = 0;
const int LIGHTNESS = 1;
const int AVERAGE = 2;

const int Type = LUMINOSITY;

const int PAL = 0;
const int HDTV = 1;
const int HDR = 2;

const int LuminosityType = HDR;

void main() {
    vec4 pixColor = texture2D(tex, v_texcoord);
    
    float luminance = 0.2126 * pixColor.r + 0.7152 * pixColor.g + 0.0722 * pixColor.b;

    vec3 resultColor = (luminance > 0.5) ? vec3(1.0) : vec3(0.0);

    gl_FragColor = vec4(resultColor, pixColor.a);
}
