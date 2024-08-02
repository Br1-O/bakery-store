export const dropdown = (category = {titleCategoryText: "", titleCategoryLink: "", titleCategoryAriaLabel: "", groupOptions: []}) => {

    let dropdown =
    `
    <li class="nav-item dropdown" onClick="">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="${category.titleCategoryLink}" 
        aria-label="${category.titleCategoryAriaLabel}" role="button" aria-expanded="false" ${window.innerWidth > 992 && "onClick='location.href=this.href; return false;'"}> 
            ${category.titleCategoryText} 
        </a>
        <ul class="dropdown-menu bg-glass-effect">
            <li>
    `;

    if (category.groupOptions) {

        for (const option of (category.groupOptions)) {
        
            dropdown +=
            `
                        ${option}
            `;
        }
    };

    dropdown +=
    `       
            </li>
        </li>
    </ul>
    `;

    return dropdown;
};

export const dropdownEventListeners = () => {

    //select all dropdown btns
    const dropdownAll = document.querySelectorAll('.dropdown-toggle');

    // Convert NodeList to array and initialize Bootstrap Dropdown
    const dropdownList = [...dropdownAll].map(dropdownToggleEl => {

        // Initialize Bootstrap Dropdown for each button
        const dropdown = new bootstrap.Dropdown(dropdownToggleEl);

        // Get the associated dropdown menu
        const dropdownMenu = dropdownToggleEl.parentElement.querySelector('.dropdown-menu');

        // Add your event listeners or manage dropdown menu here
        dropdownToggleEl.addEventListener('mouseenter', () => {
            if (window.innerWidth >= 992) {
                dropdownMenu.classList.add('show'); //show menu
            }
        });

        dropdownToggleEl.addEventListener('mouseleave', () => {
            dropdownMenu.classList.remove('show'); // Hide menu
        });

        dropdownMenu.addEventListener('mouseenter', () => {
            if (window.innerWidth >= 992) {
                dropdownMenu.classList.add('show'); //show menu
            }
        });

        dropdownMenu.addEventListener('mouseleave', () => {
            dropdownMenu.classList.remove('show'); // Hide menu
        });
    });
}