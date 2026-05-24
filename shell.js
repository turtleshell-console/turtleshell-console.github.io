(function() {
    // 1. Create container
    const container = document.createElement('div');
    container.id = 'custom-web-console';
    
    // 2. Style container
    Object.assign(container.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '400px',
        height: '300px',
        backgroundColor: '#1e1e1e',
        color: '#00ff00',
        fontFamily: 'monospace',
        fontSize: '14px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        zIndex: '999999',
        border: '1px solid #333',
        overflow: 'hidden'
    });

    // 3. Create output area
    const output = document.createElement('div');
    Object.assign(output.style, {
        flex: '1',
        padding: '10px',
        overflowY: 'auto',
        whiteSpace: 'pre-wrap',
        borderBottom: '1px solid #333'
    });
    output.textContent = "--- Web Console Initialized ---\n";

    // 4. Create input area
    const inputArea = document.createElement('div');
    Object.assign(inputArea.style, {
        display: 'flex',
        padding: '10px',
        backgroundColor: '#111'
    });

    const prefix = document.createElement('span');
    prefix.textContent = '> ';
    prefix.style.marginRight = '5px';

    const input = document.createElement('input');
    input.type = 'text';
    Object.assign(input.style, {
        flex: '1',
        background: 'transparent',
        border: 'none',
        color: '#00ff00',
        fontFamily: 'monospace',
        fontSize: '14px',
        outline: 'none'
    });

    // 5. Assemble elements
    inputArea.appendChild(prefix);
    inputArea.appendChild(input);
    container.appendChild(output);
    container.appendChild(inputArea);
    document.body.appendChild(container);

    // 6. Handle functionality
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && this.value.trim() !== '') {
            const command = this.value;
            
            // Print user input
            output.textContent += `> ${command}\n`;
            
            // Echo back response
            output.textContent += `[Echo]: ${command}\n`;
            
            // Clear and scroll
            this.value = '';
            output.scrollTop = output.scrollHeight;
        }
    });

    // Focus input on click anywhere in console
    container.addEventListener('click', () => input.focus());
})();
