precision highp float;
varying vec2 v_texcoord;
uniform sampler2D tex;

void main() {
    vec4 FragColor = texture2D(tex, v_texcoord);

    float maxComponent = max(max(FragColor.r, FragColor.g), FragColor.b);

    vec3 resultColor = vec3(0.0);
    if (maxComponent == FragColor.r) {
        resultColor.r = maxComponent;
    }
    if (maxComponent == FragColor.g) {
        resultColor.g = maxComponent;
    } 
    if (maxComponent == FragColor.b) {
        resultColor.b = maxComponent;
    }

    gl_FragColor = vec4(resultColor, FragColor.a);
}
