# crsr

This library is designed to help you create customizable mouse cursor images. You can switch between different styles and display your mouse cursor in interesting ways.

## 📖 User Guide

1. As a first step, install the `crsr` library in your project using npm.

    ```bash
    npm install crsr
    ```

2. Next, include the `crsr` library in your project.

    ```javascript
    import CustomCursor from 'crsr';
    ```

3. Then, create a new instance of `CustomCursor`.

    ```javascript
    const customCursor = new CustomCursor();
    ```

4. The library will track the mouse position and update the cursor accordingly.

## 🎨 Style Options

The library offers different cursor styles. You can set the style options as shown below:

```javascript
// Example: Circular cursor
customCursor.applyStyle('circular');
```
### Other options:
- circularfill,
- square,
- squarefill,
- triangle

## ✨ Examples
By trying out different styles, you can choose a cursor that fits your project:

```javascript
// Square filled cursor
customCursor.applyStyle('squarefill');

// Triangle cursor
customCursor.applyStyle('triangle');
```

## 🎨 Style Customization
You can customize the cursor color using your own CSS file. For instance:

```css
.custom-mouse-icon {
    background-color: #fff; /* use the color you prefer */
    border: 1px solid #fff  /* use the border color you prefer */
    /* You can make other customizations here */
}
```

## 📄 License
This library is provided under the MIT license. See the [License File](https://github.com/aligunesv/crsr/blob/main/LICENSE) for details.

## 👥 Contributors

We welcome contributions from the community to enhance and expand the crsr library. If you're interested in getting involved, feel free to follow these steps:

1. Fork this repository to your GitHub account.
2. Create a new branch for your contributions: `git checkout -b feature/new-feature`
3. Make your improvements, changes, or additions to the library.
4. Commit your changes with descriptive commit messages.
5. Push your changes to your forked repository.
6. Open a pull request against the main repository's `main` branch.

Your contributions can include bug fixes, new cursor styles, improved documentation, or any other enhancements that you think would benefit the library. We value your ideas and efforts to make crsr even better.

We look forward to seeing your contributions! Thank you for making crsr an even more valuable tool for the community.

If you have any questions or need assistance, don't hesitate to reach out by opening an issue or sending us a message.

Let's make crsr together! 🚀

----

You can mail me on <a href="mailto:aligunesv2@gmail.com">aligunesv2@gmail.com</a>

and here is my website [imvora.dev](https://www.imvora.dev)
