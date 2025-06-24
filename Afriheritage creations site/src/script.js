document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Gallery Modal - only run on gallery page
    const gallery = document.getElementById('gallery');
    if (gallery) {
        const modal = document.getElementById('gallery-modal');
        const modalImg = document.getElementById('modal-img');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const closeModal = document.getElementById('close-modal');

        gallery.addEventListener('click', (e) => {
            const item = e.target.closest('.cursor-pointer');
            if (item) {
                const img = item.querySelector('img');
                const title = item.querySelector('h3');
                const description = item.querySelector('p');

                modalImg.src = img.src;
                modalImg.alt = img.alt;
                modalTitle.textContent = title.textContent;
                modalDescription.textContent = description.textContent;

                modal.classList.remove('hidden');
            }
        });

        if (closeModal) {
            closeModal.addEventListener('click', () => {
                modal.classList.add('hidden');
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }

    // How to Play Modal for Games Page
    const gameModal = document.getElementById('game-modal');
    const closeGameModal = document.getElementById('close-game-modal');
    const gameModalTitle = document.getElementById('game-modal-title');
    const gameModalContent = document.getElementById('game-modal-content');

    const gameInstructions = {
        oware: {
            title: 'How to Play Oware',
            content: `<ul class='list-disc text-left pl-6'><li>Oware is played with a board of 12 pits and 48 seeds.</li><li>Each player controls 6 pits on their side.</li><li>Players take turns picking up all seeds from one of their pits and sowing them counterclockwise.</li><li>If the last seed lands in an opponent's pit with 2 or 3 seeds, you capture them.</li><li>The game ends when a player cannot move. The player with the most seeds wins.</li></ul>`
        },
        ampe: {
            title: 'How to Play Ampe',
            content: `<ul class='list-disc text-left pl-6'><li>Ampe is played by two or more players, usually outdoors.</li><li>Players face each other, clap, and jump simultaneously, each thrusting one foot forward.</li><li>If both players land with the same foot forward, one scores a point; if not, the other scores.</li><li>First to a set number of points wins. It's fast, energetic, and fun!</li></ul>`
        },
        ludo: {
            title: 'How to Play Ludo',
            content: `<ul class='list-disc text-left pl-6'><li>Ludo is played by 2-4 players, each with 4 tokens.</li><li>Players roll a die to move tokens out of their base and around the board.</li><li>Tokens move clockwise and must complete a full circuit to reach the home column.</li><li>If you land on another player's token, you send it back to their base.</li><li>First to get all 4 tokens home wins!</li></ul>`
        }
    };

    if (gameModal && closeGameModal && gameModalTitle && gameModalContent) {
        document.querySelectorAll('.how-to-play-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const game = btn.getAttribute('data-game');
                if (gameInstructions[game]) {
                    gameModalTitle.textContent = gameInstructions[game].title;
                    gameModalContent.innerHTML = gameInstructions[game].content;
                    gameModal.classList.remove('hidden');
                }
            });
        });
        closeGameModal.addEventListener('click', () => {
            gameModal.classList.add('hidden');
        });
        window.addEventListener('click', (e) => {
            if (e.target === gameModal) {
                gameModal.classList.add('hidden');
            }
        });
    }
}); 