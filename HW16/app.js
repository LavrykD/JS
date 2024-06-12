class autoReactions {
    constructor() {
        this.interval = null;
        this.reactions = ['💖', '👍', '🎉', '👏', '😂', '😮', '😢', '🤔', '👎'];
        this.button = document.evaluate(
            '//button[.//i[text()="mood"]]',
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null,
            ).singleNodeValue;
    }

    startReacting(emoji, delay) {
        if (!this.reactions.includes(emoji)) {
            return alert(`Button for emoji "${emoji}" not found`);
        }
        if (this.button.getAttribute('aria-pressed') === 'false') {
            this.button.click();
        }
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.interval = setInterval(() => {
            if (this.button.getAttribute('aria-pressed') === 'false') {
                this.stopReacting();
            }
            const reactionButton = document.querySelector(`[role=button][aria-label="${emoji}"]`);
            reactionButton.click();
        }, delay);
    }

    stopReacting() {
        clearInterval(this.interval);
        this.interval = null;
        return;
    }
}

let reaction = new autoReactions();
