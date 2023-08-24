class CustomCursor {
    constructor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-mouse-icon';
        document.body.appendChild(this.cursor);

        this.styles = {
            circular: `
            .custom-mouse-icon {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    padding: 4px;
                    border: 2px solid #000;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    box-sizing: border-box;
                    transition: transform 0.08s ease;
                    transform-origin: center;
            }
            `,
            circularfill: `
            .custom-mouse-icon {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    padding: 4px;
                    border: 2px solid #000;
                    background-color: #000;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    box-sizing: border-box;
                    transition: transform 0.08s ease;
                    transform-origin: center;
            }
            `,
            square: `
            .custom-mouse-icon {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    padding: 4px;
                    border: 2px solid #000;
                    pointer-events: none;
                    z-index: 9999;
                    box-sizing: border-box;
                    transition: transform 0.08s ease;
                    transform-origin: center;
            }
            `,
            squarefill: `
            .custom-mouse-icon {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    padding: 4px;
                    border: 2px solid #000;
                    background-color: #000;
                    pointer-events: none;
                    z-index: 9999;
                    box-sizing: border-box;
                    transition: transform 0.08s ease;
                    transform-origin: center;
            }
            `,
            triangle: `
            .custom-mouse-icon {
                    position: absolute;
                    width: 0;
                    height: 0;
                    border-left: 15px solid transparent;
                    border-right: 15px solid transparent;
                    border-bottom: 30px solid #000;
                    pointer-events: none;
                    z-index: 9999;
                    box-sizing: border-box;
                    transition: transform 0.08s ease;
                    transform-origin: center;
            }
            `,
        };

        this.applyStyle('circular');

        document.addEventListener('mousemove', this.trackMouse.bind(this));
    }

    trackMouse(e) {
        const x = e.clientX;
        const y = e.clientY;

        this.cursor.style.transform = `translate(${x}px, ${y}px)`;
    }

    applyStyle(styleName) {
        const style = this.styles[styleName];
        if (style) {
            const styleTag = document.createElement('style');
            styleTag.innerHTML = style;
            document.head.appendChild(styleTag);
        }
    }
}

export default CustomCursor;

//imvora.dev, have fun!