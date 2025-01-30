import { test, expect, config } from '../../utils/setup';

test('Create Product(simple)', async ({page}) => {
    await page.goto(`${config.baseUrl}/admin/login`);
    await page.getByPlaceholder('Email Address').click();
    await page.getByPlaceholder('Email Address').fill(config.adminEmail);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(config.adminPassword);
    await page.getByLabel('Sign In').click();
    await page.getByRole('link', { name: ' Catalog' }).click();
    await page.getByRole('button', { name: 'Create Product' }).click();
    await page.locator('select[name="type"]').selectOption('simple');
    await page.locator('select[name="attribute_family_id"]').selectOption('1');
    await page.locator('input[name="sku"]').click();
    await page.locator('input[name="sku"]').fill('123');
    await page.getByRole('button', { name: 'Save Product' }).click();
    await page.locator('#sku').click();
    await page.locator('#product_number').click();
    await page.locator('#product_number').fill('1234');
    await page.locator('#name').click();
    await page.locator('#name').fill('Demo_ajkshuyi');
    await page.locator('#short_description_ifr').contentFrame().locator('html').click();
    await page.locator('#short_description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_sdfhsiyu hsdgf');
    await page.locator('#description_ifr').contentFrame().locator('html').click();
    await page.locator('#description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_skdhff isudiu');
    await page.locator('#meta_title').click();
    await page.locator('#meta_title').fill('Demo_sdfiughfier');
    await page.locator('#meta_keywords').click();
    await page.locator('#meta_keywords').fill('Demo_sdghfyuweib');
    await page.locator('#meta_description').click();
    await page.locator('#meta_description').fill('Demo_sudfgiweuyb');
    await page.locator('label').filter({ hasText: 'Add Image png, jpeg, jpg' }).locator('div').click();
    await page.locator('.secondary-button').first().click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Touchscreen Winter GlovesSKU - SP-003\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(1).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Bliss Stylish Winter ScarfSKU - SP-002\$17\.00100 Available$/ }).locator('label').click();
    await page.locator('div:nth-child(6) > div:nth-child(4) > div:nth-child(2)').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(2).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('Demo_shdgfyu');
    await page.getByText('Add Selected Product').click();
    await page.locator('label').filter({ hasText: 'Winter Wear' }).locator('span').click();
    await page.locator('label').filter({ hasText: 'Men' }).locator('span').click();
    await page.locator('input[name="inventories\\[1\\]"]').click();
    await page.locator('input[name="inventories\\[1\\]"]').fill('021');
    await page.locator('div:nth-child(6) > .relative > label').click();
    await page.locator('div:nth-child(4) > .relative > label').click();
    await page.locator('#visible_individually').click();
    await page.locator('div:nth-child(3) > .relative > label').click();
    await page.locator('.relative > label').first().click();
    await page.locator('#weight').click();
    await page.locator('#weight').fill('1222223');
    await page.locator('#price').click();
    await page.locator('#price').fill('12312');
    await page.locator('#cost').click();
    await page.locator('#cost').fill('213');
    await page.locator('.box-shadow > div:nth-child(4) > div').click();
    await page.locator('#special_price').fill('12311');
    await page.locator('#special_price_from').click();
    await page.getByLabel('December 18,').first().click();
    await page.locator('#special_price_from').fill('2024-12-18');
    await page.locator('#special_price_to').click();
    await page.getByLabel('December 12,').nth(1).click();
    await page.locator('#special_price_to').fill('2024-12-12');
    await page.locator('#special_price_to').click();
    await page.getByLabel('December 20,').nth(1).click();
    await page.locator('#special_price_to').fill('2024-12-20');
    await page.locator('#length').click();
    await page.locator('#length').fill('12312');
    await page.locator('#width').click();
    await page.locator('#width').fill('1232');
    await page.locator('#height').click();
    await page.locator('#height').fill('3123');
    await page.locator('#color').click();
    await page.locator('#color').selectOption('2');
    await page.locator('#size').selectOption('7');
    await page.getByRole('button', { name: 'Save Product' }).click();

    try {
        const getError = await page.waitForSelector('.text-red-600.text-xs.italic', { timeout: 2000 }).catch(() => null);

        if (getError) {
            const errors = await page.$$eval('.text-red-600.text-xs.italic', els => els.map(el => el.innerText));
            errors.forEach(message => console.log(message));
        } else {
            await page.waitForSelector('.icon-toast-done', { timeout: 5000 });
            const message = await page.$eval('.icon-toast-done', el => el.parentNode.innerText);
            await page.click('.cursor-pointer.underline');
            console.log(message);
        }
    } catch(e) {
        console.log(page.url());
    }
});

test('Create Product(virtual)', async ({page}) => {
    await page.goto(`${config.baseUrl}/admin/login`);
    await page.getByPlaceholder('Email Address').click();
    await page.getByPlaceholder('Email Address').fill(config.adminEmail);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(config.adminPassword);
    await page.getByLabel('Sign In').click();
    await page.getByRole('link', { name: ' Catalog' }).click();
    await page.getByRole('button', { name: 'Create Product' }).click();
    await page.locator('select[name="type"]').selectOption('virtual');
    await page.locator('select[name="attribute_family_id"]').selectOption('1');
    await page.locator('input[name="sku"]').click();
    await page.locator('input[name="sku"]').fill('12345');
    await page.getByRole('button', { name: 'Save Product' }).click();
    await page.locator('#sku').click();
    await page.locator('#product_number').click();
    await page.locator('#product_number').fill('1234');
    await page.locator('#name').click();
    await page.locator('#name').fill('Demo_ajkshuyi');
    await page.locator('#short_description_ifr').contentFrame().locator('html').click();
    await page.locator('#short_description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_sdfhsiyu hsdgf');
    await page.locator('#description_ifr').contentFrame().locator('html').click();
    await page.locator('#description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_skdhff isudiu');
    await page.locator('#meta_title').click();
    await page.locator('#meta_title').fill('Demo_sdfiughfier');
    await page.locator('#meta_keywords').click();
    await page.locator('#meta_keywords').fill('Demo_sdghfyuweib');
    await page.locator('#meta_description').click();
    await page.locator('#meta_description').fill('Demo_sudfgiweuyb');
    await page.locator('label').filter({ hasText: 'Add Image png, jpeg, jpg' }).locator('div').click();
    await page.locator('.secondary-button').first().click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Touchscreen Winter GlovesSKU - SP-003\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(1).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Bliss Stylish Winter ScarfSKU - SP-002\$17\.00100 Available$/ }).locator('label').click();
    await page.locator('div:nth-child(6) > div:nth-child(4) > div:nth-child(2)').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(2).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('Demo_shdgfyu');
    await page.getByText('Add Selected Product').click();
    await page.locator('label').filter({ hasText: 'Winter Wear' }).locator('span').click();
    await page.locator('label').filter({ hasText: 'Men' }).locator('span').click();
    await page.locator('input[name="inventories\\[1\\]"]').click();
    await page.locator('input[name="inventories\\[1\\]"]').fill('021');
    await page.locator('div:nth-child(6) > .relative > label').click();
    await page.locator('div:nth-child(4) > .relative > label').click();
    await page.locator('#visible_individually').click();
    await page.locator('div:nth-child(3) > .relative > label').click();
    await page.locator('.relative > label').first().click();
    await page.locator('#price').click();
    await page.locator('#price').fill('12312');
    await page.locator('#cost').click();
    await page.locator('#cost').fill('213');
    await page.locator('.box-shadow > div:nth-child(4) > div').click();
    await page.locator('#special_price').fill('12311');
    await page.locator('#special_price_from').click();
    await page.getByLabel('December 18,').first().click();
    await page.locator('#special_price_from').fill('2024-12-18');
    await page.locator('#special_price_to').click();
    await page.getByLabel('December 12,').nth(1).click();
    await page.locator('#special_price_to').fill('2024-12-12');
    await page.locator('#special_price_to').click();
    await page.getByLabel('December 20,').nth(1).click();
    await page.locator('#special_price_to').fill('2024-12-20');
    await page.locator('#color').click();
    await page.locator('#color').selectOption('2');
    await page.locator('#size').selectOption('7');
    await page.getByRole('button', { name: 'Save Product' }).click();

    try {
        const getError = await page.waitForSelector('.text-red-600.text-xs.italic', { timeout: 2000 }).catch(() => null);

        if (getError) {
            const errors = await page.$$eval('.text-red-600.text-xs.italic', els => els.map(el => el.innerText));
            errors.forEach(message => console.log(message));
        } else {
            await page.waitForSelector('.icon-toast-done', { timeout: 5000 });
            const message = await page.$eval('.icon-toast-done', el => el.parentNode.innerText);
            await page.click('.cursor-pointer.underline');
            console.log(message);
        }
    } catch(e) {
        console.log(page.url());
    }
});

test('Create Product(downloadable)', async ({page}) => {
    await page.goto(`${config.baseUrl}/admin/login`);
    await page.getByPlaceholder('Email Address').click();
    await page.getByPlaceholder('Email Address').fill(config.adminEmail);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(config.adminPassword);
    await page.getByLabel('Sign In').click();
    await page.getByRole('link', { name: ' Catalog' }).click();
    await page.getByRole('button', { name: 'Create Product' }).click();
    await page.locator('select[name="type"]').selectOption('downloadable');
    await page.locator('select[name="attribute_family_id"]').selectOption('1');
    await page.locator('input[name="sku"]').click();
    await page.locator('input[name="sku"]').fill('12343');
    await page.getByRole('button', { name: 'Save Product' }).click();
    await page.locator('#sku').click();
    await page.locator('#product_number').click();
    await page.locator('#product_number').fill('12343');
    await page.locator('#name').click();
    await page.locator('#name').fill('Demo_ajkshuyi');
    await page.locator('#short_description_ifr').contentFrame().locator('html').click();
    await page.locator('#short_description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_sdfhsiyu hsdgf');
    await page.locator('#description_ifr').contentFrame().locator('html').click();
    await page.locator('#description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_skdhff isudiu');
    await page.locator('#meta_title').click();
    await page.locator('#meta_title').fill('Demo_sdfiughfier');
    await page.locator('#meta_keywords').click();
    await page.locator('#meta_keywords').fill('Demo_sdghfyuweib');
    await page.locator('#meta_description').click();
    await page.locator('#meta_description').fill('Demo_sudfgiweuyb');
    await page.locator('.secondary-button').first().click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Touchscreen Winter GlovesSKU - SP-003\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(1).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Bliss Stylish Winter ScarfSKU - SP-002\$17\.00100 Available$/ }).locator('label').click();
    await page.locator('div:nth-child(6) > div:nth-child(4) > div:nth-child(2)').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(2).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('Demo_shdgfyu');
    await page.getByText('Add Selected Product').click();
    await page.locator('label').filter({ hasText: 'Winter Wear' }).locator('span').click();
    await page.locator('label').filter({ hasText: 'Men' }).locator('span').click();
    await page.locator('div:nth-child(4) > .relative > label').click();
    await page.locator('#visible_individually').click();
    await page.locator('div:nth-child(3) > .relative > label').click();
    await page.locator('.relative > label').first().click();
    await page.locator('#price').click();
    await page.locator('#price').fill('12312');
    await page.locator('#cost').click();
    await page.locator('#cost').fill('213');
    await page.locator('.box-shadow > div:nth-child(4) > div').click();
    await page.locator('#special_price').fill('12311');
    await page.locator('#special_price_from').click();
    await page.getByLabel('December 18,').first().click();
    await page.locator('#special_price_from').fill('2024-12-18');
    await page.locator('#special_price_to').click();
    await page.getByLabel('December 12,').nth(1).click();
    await page.locator('#special_price_to').fill('2024-12-12');
    await page.locator('#special_price_to').click();
    await page.getByLabel('December 20,').nth(1).click();
    await page.locator('#special_price_to').fill('2024-12-20');
    await page.locator('#color').click();
    await page.locator('#color').selectOption('2');
    await page.locator('#size').selectOption('7');await page.getByText('Add Link').first().click();
    await page.locator('input[name="title"]').click();
    await page.locator('input[name="title"]').fill('Demo_qwwee');
    await page.locator('input[name="price"]').first().click();
    await page.locator('input[name="price"]').first().fill('123213');
    await page.locator('select[name="type"]').selectOption('url');
    await page.locator('input[name="url"]').click();
    await page.locator('input[name="url"]').click();
    await page.locator('input[name="url"]').fill(`${config.baseUrl}/admin/catalog/products/edit/15`);
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    await page.getByRole('button', { name: 'Save Product' }).click();

    try {
        const getError = await page.waitForSelector('.text-red-600.text-xs.italic', { timeout: 2000 }).catch(() => null);

        if (getError) {
            const errors = await page.$$eval('.text-red-600.text-xs.italic', els => els.map(el => el.innerText));
            errors.forEach(message => console.log(message));
        } else {
            await page.waitForSelector('.icon-toast-done', { timeout: 5000 });
            const message = await page.$eval('.icon-toast-done', el => el.parentNode.innerText);
            await page.click('.cursor-pointer.underline');
            console.log(message);
        }
    } catch(e) {
        console.log(page.url());
    }
});

test('Edit Product(simple)', async ({page}) => {
    await page.goto(`${config.baseUrl}/admin/login`);
    await page.getByPlaceholder('Email Address').click();
    await page.getByPlaceholder('Email Address').fill(config.adminEmail);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(config.adminPassword);
    await page.getByLabel('Sign In').click();
    await page.getByRole('link', { name: ' Catalog' }).click();
    await page.locator('div:nth-child(2) > div > div > div > .relative').first().click();
    await page.getByText('Clear All').first().click();
    await page.getByRole('button', { name: 'Select ' }).nth(2).click();
    await page.getByText('Simple', { exact: true }).click();
    await page.getByRole('button', { name: 'Apply Filters' }).click();
    await page.locator('.row > div:nth-child(3) > div:nth-child(2) > a:nth-child(2)').first().click();
    await page.locator('.icon-delete').first().click();
    await page.getByText('Delete', { exact: true }).first().click();
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.getByText('Delete', { exact: true }).nth(2).click();
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.locator('#sku').click();
    await page.locator('#product_number').click();
    await page.locator('#product_number').fill('1234');
    await page.locator('#name').click();
    await page.locator('#name').fill('Demo_ajkshuyi');
    await page.locator('#short_description_ifr').contentFrame().locator('html').click();
    await page.locator('#short_description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_sdfhsiyu hsdgf');
    await page.locator('#description_ifr').contentFrame().locator('html').click();
    await page.locator('#description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_skdhff isudiu');
    await page.locator('#meta_title').click();
    await page.locator('#meta_title').fill('Demo_sdfiughfier');
    await page.locator('#meta_keywords').click();
    await page.locator('#meta_keywords').fill('Demo_sdghfyuweib');
    await page.locator('#meta_description').click();
    await page.locator('#meta_description').fill('Demo_sudfgiweuyb');
    await page.locator('.secondary-button').first().click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Touchscreen Winter GlovesSKU - SP-003\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(1).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Bliss Stylish Winter ScarfSKU - SP-002\$17\.00100 Available$/ }).locator('label').click();
    await page.locator('div:nth-child(6) > div:nth-child(4) > div:nth-child(2)').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(2).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('Demo_shdgfyu');
    await page.getByText('Add Selected Product').click();
    await page.locator('label').filter({ hasText: 'Winter Wear' }).locator('span').click();
    await page.locator('label').filter({ hasText: 'Men' }).locator('span').click();
    await page.locator('input[name="inventories\\[1\\]"]').click();
    await page.locator('input[name="inventories\\[1\\]"]').fill('021');
    await page.locator('div:nth-child(6) > .relative > label').click();
    await page.locator('div:nth-child(4) > .relative > label').click();
    await page.locator('#visible_individually').click();
    await page.locator('div:nth-child(3) > .relative > label').click();
    await page.locator('.relative > label').first().click();
    await page.locator('#weight').click();
    await page.locator('#weight').fill('1222223');
    await page.locator('#price').click();
    await page.locator('#price').fill('12312');
    await page.locator('#cost').click();
    await page.locator('#cost').fill('213');
    await page.locator('.box-shadow > div:nth-child(4) > div').click();
    await page.locator('#special_price').fill('12311');
    await page.locator('#special_price_from').click();
    await page.getByLabel('December 18,').first().click();
    await page.locator('#special_price_from').fill('2024-12-18');
    await page.locator('#special_price_to').click();
    await page.getByLabel('December 12,').nth(1).click();
    await page.locator('#special_price_to').fill('2024-12-12');
    await page.locator('#special_price_to').click();
    await page.getByLabel('December 20,').nth(1).click();
    await page.locator('#special_price_to').fill('2024-12-20');
    await page.locator('#length').click();
    await page.locator('#length').fill('12312');
    await page.locator('#width').click();
    await page.locator('#width').fill('1232');
    await page.locator('#height').click();
    await page.locator('#height').fill('3123');
    await page.locator('#color').click();
    await page.locator('#color').selectOption('2');
    await page.locator('#size').selectOption('7');
    await page.getByRole('button', { name: 'Save Product' }).click();

    try {
        const getError = await page.waitForSelector('.text-red-600.text-xs.italic', { timeout: 2000 }).catch(() => null);

        if (getError) {
            const errors = await page.$$eval('.text-red-600.text-xs.italic', els => els.map(el => el.innerText));
            errors.forEach(message => console.log(message));
        } else {
            await page.waitForSelector('.icon-toast-done', { timeout: 5000 });
            const message = await page.$eval('.icon-toast-done', el => el.parentNode.innerText);
            await page.click('.cursor-pointer.underline');
            console.log(message);
        }
    } catch(e) {
        console.log(page.url());
    }
});

test('Edit Product(virtual)', async ({page}) => {
    await page.goto(`${config.baseUrl}/admin/login`);
    await page.getByPlaceholder('Email Address').click();
    await page.getByPlaceholder('Email Address').fill(config.adminEmail);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(config.adminPassword);
    await page.getByLabel('Sign In').click();
    await page.getByRole('link', { name: ' Catalog' }).click();
    await page.locator('div:nth-child(2) > div > div > div > .relative').first().click();
    await page.getByText('Clear All').first().click();
    await page.getByRole('button', { name: 'Select ' }).nth(2).click();
    await page.getByText('Virtual', { exact: true }).click();
    await page.getByRole('button', { name: 'Apply Filters' }).click();
    await page.locator('.row > div:nth-child(3) > div:nth-child(2) > a:nth-child(2)').first().click();
    await page.locator('.icon-delete').first().click();
    await page.getByText('Delete', { exact: true }).first().click();
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.getByText('Delete', { exact: true }).nth(2).click();
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.locator('#sku').click();
    await page.locator('#product_number').click();
    await page.locator('#product_number').fill('1234');
    await page.locator('#name').click();
    await page.locator('#name').fill('Demo_ajkshuyi');
    await page.locator('#short_description_ifr').contentFrame().locator('html').click();
    await page.locator('#short_description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_sdfhsiyu hsdgf');
    await page.locator('#description_ifr').contentFrame().locator('html').click();
    await page.locator('#description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_skdhff isudiu');
    await page.locator('#meta_title').click();
    await page.locator('#meta_title').fill('Demo_sdfiughfier');
    await page.locator('#meta_keywords').click();
    await page.locator('#meta_keywords').fill('Demo_sdghfyuweib');
    await page.locator('#meta_description').click();
    await page.locator('#meta_description').fill('Demo_sudfgiweuyb');
    await page.locator('.secondary-button').first().click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Touchscreen Winter GlovesSKU - SP-003\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(1).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Bliss Stylish Winter ScarfSKU - SP-002\$17\.00100 Available$/ }).locator('label').click();
    await page.locator('div:nth-child(6) > div:nth-child(4) > div:nth-child(2)').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(2).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('Demo_shdgfyu');
    await page.getByText('Add Selected Product').click();
    await page.locator('label').filter({ hasText: 'Winter Wear' }).locator('span').click();
    await page.locator('label').filter({ hasText: 'Men' }).locator('span').click();
    await page.locator('input[name="inventories\\[1\\]"]').click();
    await page.locator('input[name="inventories\\[1\\]"]').fill('021');
    await page.locator('div:nth-child(6) > .relative > label').click();
    await page.locator('div:nth-child(4) > .relative > label').click();
    await page.locator('#visible_individually').click();
    await page.locator('div:nth-child(3) > .relative > label').click();
    await page.locator('.relative > label').first().click();
    await page.locator('#price').click();
    await page.locator('#price').fill('12312');
    await page.locator('#cost').click();
    await page.locator('#cost').fill('213');
    await page.locator('.box-shadow > div:nth-child(4) > div').click();
    await page.locator('#special_price').fill('12311');
    await page.locator('#special_price_from').click();
    await page.getByLabel('December 18,').first().click();
    await page.locator('#special_price_from').fill('2024-12-18');
    await page.locator('#special_price_to').click();
    await page.getByLabel('December 12,').nth(1).click();
    await page.locator('#special_price_to').fill('2024-12-12');
    await page.locator('#special_price_to').click();
    await page.getByLabel('December 20,').nth(1).click();
    await page.locator('#special_price_to').fill('2024-12-20');
    await page.locator('#color').click();
    await page.locator('#color').selectOption('2');
    await page.locator('#size').selectOption('7');
    await page.getByRole('button', { name: 'Save Product' }).click();

    try {
        const getError = await page.waitForSelector('.text-red-600.text-xs.italic', { timeout: 2000 }).catch(() => null);

        if (getError) {
            const errors = await page.$$eval('.text-red-600.text-xs.italic', els => els.map(el => el.innerText));
            errors.forEach(message => console.log(message));
        } else {
            await page.waitForSelector('.icon-toast-done', { timeout: 5000 });
            const message = await page.$eval('.icon-toast-done', el => el.parentNode.innerText);
            await page.click('.cursor-pointer.underline');
            console.log(message);
        }
    } catch(e) {
        console.log(page.url());
    }
});

test('Edit Product(downloadable)', async ({page}) => {
    await page.goto(`${config.baseUrl}/admin/login`);
    await page.getByPlaceholder('Email Address').click();
    await page.getByPlaceholder('Email Address').fill(config.adminEmail);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(config.adminPassword);
    await page.getByLabel('Sign In').click();
    await page.getByRole('link', { name: ' Catalog' }).click();
    await page.locator('div:nth-child(2) > div > div > div > .relative').first().click();
    await page.getByText('Clear All').first().click();
    await page.getByRole('button', { name: 'Select ' }).nth(2).click();
    await page.getByText('Downloadable', { exact: true }).click();
    await page.getByRole('button', { name: 'Apply Filters' }).click();
    await page.locator('.row > div:nth-child(3) > div:nth-child(2) > a:nth-child(2)').first().click();
    await page.locator('.icon-delete').first().click();
    await page.getByText('Delete', { exact: true }).first().click();
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.getByText('Delete', { exact: true }).nth(2).click();
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.locator('#sku').click();
    await page.locator('#product_number').click();
    await page.locator('#product_number').fill('12343');
    await page.locator('#name').click();
    await page.locator('#name').fill('Demo_ajkshuyi');
    await page.locator('#short_description_ifr').contentFrame().locator('html').click();
    await page.locator('#short_description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_sdfhsiyu hsdgf');
    await page.locator('#description_ifr').contentFrame().locator('html').click();
    await page.locator('#description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_skdhff isudiu');
    await page.locator('#meta_title').click();
    await page.locator('#meta_title').fill('Demo_sdfiughfier');
    await page.locator('#meta_keywords').click();
    await page.locator('#meta_keywords').fill('Demo_sdghfyuweib');
    await page.locator('#meta_description').click();
    await page.locator('#meta_description').fill('Demo_sudfgiweuyb');
    await page.locator('label').filter({ hasText: 'Add Image png, jpeg, jpg' }).locator('div').click();
    //   await page.locator('body').setInputFiles('Screenshot from 2024-12-18 11-00-34.png');
    await page.locator('.secondary-button').first().click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Touchscreen Winter GlovesSKU - SP-003\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(1).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Bliss Stylish Winter ScarfSKU - SP-002\$17\.00100 Available$/ }).locator('label').click();
    await page.locator('div:nth-child(6) > div:nth-child(4) > div:nth-child(2)').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(2).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('Demo_shdgfyu');
    await page.getByText('Add Selected Product').click();
    await page.locator('label').filter({ hasText: 'Winter Wear' }).locator('span').click();
    await page.locator('label').filter({ hasText: 'Men' }).locator('span').click();
    await page.locator('div:nth-child(4) > .relative > label').click();
    await page.locator('#visible_individually').click();
    await page.locator('div:nth-child(3) > .relative > label').click();
    await page.locator('.relative > label').first().click();
    await page.locator('#price').click();
    await page.locator('#price').fill('12312');
    await page.locator('#cost').click();
    await page.locator('#cost').fill('213');
    await page.locator('.box-shadow > div:nth-child(4) > div').click();
    await page.locator('#special_price').fill('12311');
    await page.locator('#special_price_from').click();
    await page.getByLabel('December 18,').first().click();
    await page.locator('#special_price_from').fill('2024-12-18');
    await page.locator('#special_price_to').click();
    await page.getByLabel('December 12,').nth(1).click();
    await page.locator('#special_price_to').fill('2024-12-12');
    await page.locator('#special_price_to').click();
    await page.getByLabel('December 20,').nth(1).click();
    await page.locator('#special_price_to').fill('2024-12-20');
    await page.locator('#color').click();
    await page.locator('#color').selectOption('2');
    await page.locator('#size').selectOption('7');
    await page.getByText('Add Link').first().click();
    await page.locator('input[name="title"]').click();
    await page.locator('input[name="title"]').fill('Demo_qwwee');
    await page.locator('input[name="price"]').first().click();
    await page.locator('input[name="price"]').first().fill('123213');
    await page.locator('select[name="type"]').selectOption('url');
    await page.locator('input[name="url"]').click();
    await page.locator('input[name="url"]').click();
    await page.locator('input[name="url"]').fill(`${config.baseUrl}/admin/catalog/products/edit/15`);
    await page.locator('input[name="sample_file"]').nth(1).click();
    //   await page.locator('input[name="sample_file"]').nth(1).setInputFiles('Screenshot from 2024-12-18 11-00-34.png');
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    await page.getByRole('button', { name: 'Save Product' }).click();

    try {
        const getError = await page.waitForSelector('.text-red-600.text-xs.italic', { timeout: 2000 }).catch(() => null);

        if (getError) {
            const errors = await page.$$eval('.text-red-600.text-xs.italic', els => els.map(el => el.innerText));
            errors.forEach(message => console.log(message));
        } else {
            await page.waitForSelector('.icon-toast-done', { timeout: 5000 });
            const message = await page.$eval('.icon-toast-done', el => el.parentNode.innerText);
            await page.click('.cursor-pointer.underline');
            console.log(message);
        }
    } catch(e) {
        console.log(page.url());
    }
});

test('Create Product(bundle)', async ({page}) => {
    await page.goto(`${config.baseUrl}/admin/login`);
    await page.getByPlaceholder('Email Address').click();
    await page.getByPlaceholder('Email Address').fill(config.adminEmail);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(config.adminPassword);
    await page.getByLabel('Sign In').click();
    await page.getByRole('link', { name: ' Catalog' }).click();
    await page.getByRole('button', { name: 'Create Product' }).click();
    await page.locator('select[name="type"]').selectOption('bundle');
    await page.locator('select[name="attribute_family_id"]').selectOption('1');
    await page.locator('input[name="sku"]').click();
    await page.locator('input[name="sku"]').fill('123');
    await page.getByRole('button', { name: 'Save Product' }).click();
    await page.locator('#sku').click();
    await page.locator('#product_number').click();
    await page.locator('#product_number').fill('1234');
    await page.locator('#name').click();
    await page.locator('#name').fill('Demo_ajkshuyi');
    await page.locator('#short_description_ifr').contentFrame().locator('html').click();
    await page.locator('#short_description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_sdfhsiyu hsdgf');
    await page.locator('#description_ifr').contentFrame().locator('html').click();
    await page.locator('#description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_skdhff isudiu');
    await page.locator('#meta_title').click();
    await page.locator('#meta_title').fill('Demo_sdfiughfier');
    await page.locator('#meta_keywords').click();
    await page.locator('#meta_keywords').fill('Demo_sdghfyuweib');
    await page.locator('#meta_description').click();
    await page.locator('#meta_description').fill('Demo_sudfgiweuyb');
    await page.locator('label').filter({ hasText: 'Add Image png, jpeg, jpg' }).locator('div').click();
    //   await page.locator('body').setInputFiles('Screenshot from 2024-12-18 11-00-34.png');
    await page.locator('.secondary-button').first().click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Touchscreen Winter GlovesSKU - SP-003\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(1).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Bliss Stylish Winter ScarfSKU - SP-002\$17\.00100 Available$/ }).locator('label').click();
    await page.locator('div:nth-child(6) > div:nth-child(4) > div:nth-child(2)').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(2).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('Demo_shdgfyu');
    await page.getByText('Add Selected Product').click();
    await page.locator('label').filter({ hasText: 'Winter Wear' }).locator('span').click();
    await page.locator('label').filter({ hasText: 'Men' }).locator('span').click();
    await page.locator('div:nth-child(6) > .relative > label').click();
    await page.locator('div:nth-child(4) > .relative > label').click();
    await page.locator('#visible_individually').click();
    await page.locator('div:nth-child(3) > .relative > label').click();
    await page.locator('.relative > label').first().click();
    await page.locator('#color').click();
    await page.locator('#color').selectOption('2');
    await page.locator('#size').selectOption('7');
    await page.getByText('Add Option').click();
    await page.locator('input[name="label"]').click();
    await page.locator('input[name="label"]').fill('Demo_option1');
    await page.locator('select[name="type"]').selectOption('radio');
    await page.getByText('Type Select Radio Checkbox Multiselect Is Required Yes No').click();
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    await page.locator('.grid > .secondary-button').click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Touchscreen Winter GlovesSKU - SP-003\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Bliss Stylish Winter ScarfSKU - SP-002\$17\.00100 Available$/ }).locator('label').click();
    await page.getByText('Add Selected Product').click();
    await page.locator('div:nth-child(5) > div:nth-child(6) > div > div > div > div:nth-child(2) > .cursor-pointer').first().click();
    await page.getByRole('button', { name: 'Save Product' }).click();

    try {
        const getError = await page.waitForSelector('.text-red-600.text-xs.italic', { timeout: 2000 }).catch(() => null);

        if (getError) {
            const errors = await page.$$eval('.text-red-600.text-xs.italic', els => els.map(el => el.innerText));
            errors.forEach(message => console.log(message));
        } else {
            await page.waitForSelector('.icon-toast-done', { timeout: 5000 });
            const message = await page.$eval('.icon-toast-done', el => el.parentNode.innerText);
            await page.click('.cursor-pointer.underline');
            console.log(message);
        }
    } catch(e) {
        console.log(page.url());
    }
});

test('Edit Product(bundle)', async ({page}) => {
    await page.goto(`${config.baseUrl}/admin/login`);
    await page.getByPlaceholder('Email Address').click();
    await page.getByPlaceholder('Email Address').fill(config.adminEmail);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(config.adminPassword);
    await page.getByLabel('Sign In').click();
    await page.getByRole('link', { name: ' Catalog' }).click();
    await page.locator('div:nth-child(2) > div > div > div > .relative').first().click();
    await page.getByText('Clear All').first().click();
    await page.getByRole('button', { name: 'Select ' }).nth(2).click();
    await page.getByText('Bundle', { exact: true }).click();
    await page.getByRole('button', { name: 'Apply Filters' }).click();
    await page.locator('.row > div:nth-child(3) > div:nth-child(2) > a:nth-child(2)').first().click();
    await page.locator('.icon-delete').first().click();
    await page.getByText('Delete', { exact: true }).first().click();
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.getByText('Delete', { exact: true }).nth(2).click();
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.locator('input[name="sku"]').click();
    await page.locator('input[name="sku"]').fill('123');
    await page.getByRole('button', { name: 'Save Product' }).click();
    await page.locator('#sku').click();
    await page.locator('#product_number').click();
    await page.locator('#product_number').fill('1234');
    await page.locator('#name').click();
    await page.locator('#name').fill('Demo_ajkshuyi');
    await page.locator('#short_description_ifr').contentFrame().locator('html').click();
    await page.locator('#short_description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_sdfhsiyu hsdgf');
    await page.locator('#description_ifr').contentFrame().locator('html').click();
    await page.locator('#description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_skdhff isudiu');
    await page.locator('#meta_title').click();
    await page.locator('#meta_title').fill('Demo_sdfiughfier');
    await page.locator('#meta_keywords').click();
    await page.locator('#meta_keywords').fill('Demo_sdghfyuweib');
    await page.locator('#meta_description').click();
    await page.locator('#meta_description').fill('Demo_sudfgiweuyb');
    await page.locator('label').filter({ hasText: 'Add Image png, jpeg, jpg' }).locator('div').click();
    //   await page.locator('body').setInputFiles('Screenshot from 2024-12-18 11-00-34.png');
    await page.locator('.secondary-button').first().click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Touchscreen Winter GlovesSKU - SP-003\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(1).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Bliss Stylish Winter ScarfSKU - SP-002\$17\.00100 Available$/ }).locator('label').click();
    await page.locator('div:nth-child(6) > div:nth-child(4) > div:nth-child(2)').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(2).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('Demo_shdgfyu');
    await page.getByText('Add Selected Product').click();
    await page.locator('label').filter({ hasText: 'Winter Wear' }).locator('span').click();
    await page.locator('label').filter({ hasText: 'Men' }).locator('span').click();
    await page.locator('div:nth-child(6) > .relative > label').click();
    await page.locator('div:nth-child(4) > .relative > label').click();
    await page.locator('#visible_individually').click();
    await page.locator('div:nth-child(3) > .relative > label').click();
    await page.locator('.relative > label').first().click();
    await page.locator('#color').click();
    await page.locator('#color').selectOption('2');
    await page.locator('#size').selectOption('7');
    await page.getByText('Add Option').click();
    await page.locator('input[name="label"]').click();
    await page.locator('input[name="label"]').fill('Demo_option1');
    await page.locator('select[name="type"]').selectOption('radio');
    await page.getByText('Type Select Radio Checkbox Multiselect Is Required Yes No').click();
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    await page.locator('.grid > .secondary-button').click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Touchscreen Winter GlovesSKU - SP-003\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Bliss Stylish Winter ScarfSKU - SP-002\$17\.00100 Available$/ }).locator('label').click();
    await page.getByText('Add Selected Product').click();
    await page.locator('div:nth-child(5) > div:nth-child(6) > div > div > div > div:nth-child(2) > .cursor-pointer').first().click();
    await page.getByRole('button', { name: 'Save Product' }).click();

    try {
        const getError = await page.waitForSelector('.text-red-600.text-xs.italic', { timeout: 2000 }).catch(() => null);

        if (getError) {
            const errors = await page.$$eval('.text-red-600.text-xs.italic', els => els.map(el => el.innerText));
            errors.forEach(message => console.log(message));
        } else {
            await page.waitForSelector('.icon-toast-done', { timeout: 5000 });
            const message = await page.$eval('.icon-toast-done', el => el.parentNode.innerText);
            await page.click('.cursor-pointer.underline');
            console.log(message);
        }
    } catch(e) {
        console.log(page.url());
    }
});

test('Create Product(grouped)', async ({page}) => {
    await page.goto(`${config.baseUrl}/admin/login`);
    await page.getByPlaceholder('Email Address').click();
    await page.getByPlaceholder('Email Address').fill(config.adminEmail);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(config.adminPassword);
    await page.getByLabel('Sign In').click();
    await page.getByRole('link', { name: ' Catalog' }).click();
    await page.getByRole('button', { name: 'Create Product' }).click();
    await page.locator('select[name="type"]').selectOption('grouped');
    await page.locator('select[name="attribute_family_id"]').selectOption('1');
    await page.locator('input[name="sku"]').click();
    await page.locator('input[name="sku"]').fill('123');
    await page.getByRole('button', { name: 'Save Product' }).click();
    await page.locator('#sku').click();
    await page.locator('#product_number').click();
    await page.locator('#product_number').fill('1234');
    await page.locator('#name').click();
    await page.locator('#name').fill('Demo_ajkshuyi');
    await page.locator('#short_description_ifr').contentFrame().locator('html').click();
    await page.locator('#short_description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_sdfhsiyu hsdgf');
    await page.locator('#description_ifr').contentFrame().locator('html').click();
    await page.locator('#description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_skdhff isudiu');
    await page.locator('#meta_title').click();
    await page.locator('#meta_title').fill('Demo_sdfiughfier');
    await page.locator('#meta_keywords').click();
    await page.locator('#meta_keywords').fill('Demo_sdghfyuweib');
    await page.locator('#meta_description').click();
    await page.locator('#meta_description').fill('Demo_sudfgiweuyb');
    await page.locator('label').filter({ hasText: 'Add Image png, jpeg, jpg' }).locator('div').click();
    //   await page.locator('body').setInputFiles('Screenshot from 2024-12-18 11-00-34.png');
    await page.locator('.secondary-button').first().click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Touchscreen Winter GlovesSKU - SP-003\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(1).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Bliss Stylish Winter ScarfSKU - SP-002\$17\.00100 Available$/ }).locator('label').click();
    await page.locator('div:nth-child(6) > div:nth-child(4) > div:nth-child(2)').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(2).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('Demo_shdgfyu');
    await page.getByText('Add Selected Product').click();
    await page.locator('label').filter({ hasText: 'Winter Wear' }).locator('span').click();
    await page.locator('label').filter({ hasText: 'Men' }).locator('span').click();
    await page.locator('div:nth-child(6) > .relative > label').click();
    await page.locator('div:nth-child(4) > .relative > label').click();
    await page.locator('#visible_individually').click();
    await page.locator('div:nth-child(3) > .relative > label').click();
    await page.locator('.relative > label').first().click();
    await page.locator('#color').click();
    await page.locator('#color').selectOption('2');
    await page.locator('#size').selectOption('7');
    await page.locator('.mb-2\\.5 > div:nth-child(2) > .secondary-button').first().click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('.icon-uncheckbox').first().click();
    await page.getByText('Add Selected Product').click();
    await page.locator('input[name="links\\[link_0\\]\\[qty\\]"]').click();
    await page.locator('input[name="links\\[link_0\\]\\[qty\\]"]').fill('13');
    await page.getByRole('button', { name: 'Save Product' }).click();

    try {
        const getError = await page.waitForSelector('.text-red-600.text-xs.italic', { timeout: 2000 }).catch(() => null);

        if (getError) {
            const errors = await page.$$eval('.text-red-600.text-xs.italic', els => els.map(el => el.innerText));
            errors.forEach(message => console.log(message));
        } else {
            await page.waitForSelector('.icon-toast-done', { timeout: 5000 });
            const message = await page.$eval('.icon-toast-done', el => el.parentNode.innerText);
            await page.click('.cursor-pointer.underline');
            console.log(message);
        }
    } catch(e) {
        console.log(page.url());
    }
});

test('Edit Product(grouped)', async ({page}) => {
    await page.goto(`${config.baseUrl}/admin/login`);
    await page.getByPlaceholder('Email Address').click();
    await page.getByPlaceholder('Email Address').fill(config.adminEmail);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(config.adminPassword);
    await page.getByLabel('Sign In').click();
    await page.getByRole('link', { name: ' Catalog' }).click();
    await page.locator('div:nth-child(2) > div > div > div > .relative').first().click();
    await page.getByText('Clear All').first().click();
    await page.getByRole('button', { name: 'Select ' }).nth(2).click();
    await page.getByText('Grouped', { exact: true }).click();
    await page.getByRole('button', { name: 'Apply Filters' }).click();
    await page.locator('.row > div:nth-child(3) > div:nth-child(2) > a:nth-child(2)').first().click();
    await page.locator('.icon-delete').first().click();
    await page.getByText('Delete', { exact: true }).first().click();
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.getByText('Delete', { exact: true }).nth(2).click();
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.locator('input[name="sku"]').click();
    await page.locator('input[name="sku"]').fill('123');
    await page.getByRole('button', { name: 'Save Product' }).click();
    await page.locator('#sku').click();
    await page.locator('#product_number').click();
    await page.locator('#product_number').fill('1234');
    await page.locator('#name').click();
    await page.locator('#name').fill('Demo_ajkshuyi');
    await page.locator('#short_description_ifr').contentFrame().locator('html').click();
    await page.locator('#short_description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_sdfhsiyu hsdgf');
    await page.locator('#description_ifr').contentFrame().locator('html').click();
    await page.locator('#description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_skdhff isudiu');
    await page.locator('#meta_title').click();
    await page.locator('#meta_title').fill('Demo_sdfiughfier');
    await page.locator('#meta_keywords').click();
    await page.locator('#meta_keywords').fill('Demo_sdghfyuweib');
    await page.locator('#meta_description').click();
    await page.locator('#meta_description').fill('Demo_sudfgiweuyb');
    await page.locator('label').filter({ hasText: 'Add Image png, jpeg, jpg' }).locator('div').click();
    //   await page.locator('body').setInputFiles('Screenshot from 2024-12-18 11-00-34.png');
    await page.locator('.secondary-button').first().click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Touchscreen Winter GlovesSKU - SP-003\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(1).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Bliss Stylish Winter ScarfSKU - SP-002\$17\.00100 Available$/ }).locator('label').click();
    await page.locator('div:nth-child(6) > div:nth-child(4) > div:nth-child(2)').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(2).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('Demo_shdgfyu');
    await page.getByText('Add Selected Product').click();
    await page.locator('label').filter({ hasText: 'Winter Wear' }).locator('span').click();
    await page.locator('label').filter({ hasText: 'Men' }).locator('span').click();
    await page.locator('div:nth-child(6) > .relative > label').click();
    await page.locator('div:nth-child(4) > .relative > label').click();
    await page.locator('#visible_individually').click();
    await page.locator('div:nth-child(3) > .relative > label').click();
    await page.locator('.relative > label').first().click();
    await page.locator('#color').click();
    await page.locator('#color').selectOption('2');
    await page.locator('#size').selectOption('7');
    await page.locator('.mb-2\\.5 > div:nth-child(2) > .secondary-button').first().click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('.icon-uncheckbox').first().click();
    await page.getByText('Add Selected Product').click();
    await page.locator('input[name="links\\[link_0\\]\\[qty\\]"]').click();
    await page.locator('input[name="links\\[link_0\\]\\[qty\\]"]').fill('13');
    await page.getByRole('button', { name: 'Save Product' }).click();

    try {
        const getError = await page.waitForSelector('.text-red-600.text-xs.italic', { timeout: 2000 }).catch(() => null);

        if (getError) {
            const errors = await page.$$eval('.text-red-600.text-xs.italic', els => els.map(el => el.innerText));
            errors.forEach(message => console.log(message));
        } else {
            await page.waitForSelector('.icon-toast-done', { timeout: 5000 });
            const message = await page.$eval('.icon-toast-done', el => el.parentNode.innerText);
            await page.click('.cursor-pointer.underline');
            console.log(message);
        }
    } catch(e) {
        console.log(page.url());
    }
});

test('Create Product(configurable)', async ({page}) => {
    await page.goto(`${config.baseUrl}/admin/login`);
    await page.getByPlaceholder('Email Address').click();
    await page.getByPlaceholder('Email Address').fill(config.adminEmail);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(config.adminPassword);
    await page.getByLabel('Sign In').click();
    await page.getByRole('link', { name: ' Catalog' }).click();
    await page.getByRole('button', { name: 'Create Product' }).click();
    await page.locator('select[name="type"]').selectOption('configurable');
    await page.locator('select[name="attribute_family_id"]').selectOption('1');
    await page.locator('input[name="sku"]').click();
    await page.locator('input[name="sku"]').fill('Demo_12we');
    await page.getByRole('button', { name: 'Save Product' }).click();
    await page.locator('p').filter({ hasText: 'Yellow' }).locator('span').click();
    await page.locator('div:nth-child(2) > div > p:nth-child(3) > .icon-cross').click();
    await page.locator('p').filter({ hasText: 'Red' }).locator('span').click();
    await page.getByRole('button', { name: 'Save Product' }).click();
    await page.locator('#sku').click();
    await page.locator('#product_number').click();
    await page.locator('#product_number').fill('1234');
    await page.locator('#name').click();
    await page.locator('#name').fill('Demo_ajkshuyi');
    await page.locator('#short_description_ifr').contentFrame().locator('html').click();
    await page.locator('#short_description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_sdfhsiyu hsdgf');
    await page.locator('#description_ifr').contentFrame().locator('html').click();
    await page.locator('#description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_skdhff isudiu');
    await page.locator('#meta_title').click();
    await page.locator('#meta_title').fill('Demo_sdfiughfier');
    await page.locator('#meta_keywords').click();
    await page.locator('#meta_keywords').fill('Demo_sdghfyuweib');
    await page.locator('#meta_description').click();
    await page.locator('#meta_description').fill('Demo_sudfgiweuyb');
    await page.locator('label').filter({ hasText: 'Add Image png, jpeg, jpg' }).locator('div').click();
    //   await page.locator('body').setInputFiles('Screenshot from 2024-12-18 11-00-34.png');
    await page.locator('.secondary-button').first().click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Touchscreen Winter GlovesSKU - SP-003\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(1).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Bliss Stylish Winter ScarfSKU - SP-002\$17\.00100 Available$/ }).locator('label').click();
    await page.locator('div:nth-child(6) > div:nth-child(4) > div:nth-child(2)').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(2).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('Demo_shdgfyu');
    await page.getByText('Add Selected Product').click();
    await page.locator('label').filter({ hasText: 'Winter Wear' }).locator('span').click();
    await page.locator('label').filter({ hasText: 'Men' }).locator('span').click();
    await page.locator('div:nth-child(6) > .relative > label').click();
    await page.locator('div:nth-child(4) > .relative > label').click();
    await page.locator('#visible_individually').click();
    await page.locator('div:nth-child(3) > .relative > label').click();
    await page.locator('.relative > label').first().click();
    await page.locator('#color').click();
    await page.locator('#color').selectOption('2');
    await page.locator('#size').selectOption('7');
    await page.locator('.flex > div:nth-child(6) > div:nth-child(2)').click();
    await page.locator('.icon-uncheckbox').first().click();
    await page.getByText('Select Variants Color GreenColor BlackColor WhiteSize SSize MSize XL Select').click();
    await page.getByRole('button', { name: 'Select Action ' }).click();
    await page.getByText('Edit Names').click();
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.locator('.icon-cross').click();
    await page.locator('.grid > .flex > div > .cursor-pointer').first().click();
    await page.locator('input[name="name"]').nth(1).click();
    await page.locator('input[name="name"]').nth(1).fill('Demo_Variant 2 6asdsad');
    await page.locator('input[name="sku"]').nth(1).click();
    await page.locator('input[name="sku"]').nth(1).click();
    await page.locator('input[name="sku"]').nth(1).fill('Demo_12we-variant-2-6sds');
    await page.locator('input[name="sku"]').nth(1).press('CapsLock');
    await page.locator('input[name="sku"]').nth(1).fill('Demo_12we-variant-2-6sdsWDW');
    await page.locator('input[name="price"]').click();
    await page.locator('input[name="price"]').fill('342234');
    await page.locator('select[name="status"]').selectOption('0');
    await page.locator('input[name="weight"]').click();
    await page.locator('input[name="weight"]').fill('0234');
    await page.locator('input[name="inventories\\[1\\]"]').click();
    await page.locator('input[name="inventories\\[1\\]"]').fill('023');
    await page.getByRole('button', { name: 'Save', exact: true }).click();

    try {
        const getError = await page.waitForSelector('.text-red-600.text-xs.italic', { timeout: 2000 }).catch(() => null);

        if (getError) {
            const errors = await page.$$eval('.text-red-600.text-xs.italic', els => els.map(el => el.innerText));
            errors.forEach(message => console.log(message));
        } else {
            await page.waitForSelector('.icon-toast-done', { timeout: 5000 });
            const message = await page.$eval('.icon-toast-done', el => el.parentNode.innerText);
            await page.click('.cursor-pointer.underline');
            console.log(message);
        }
    } catch(e) {
        console.log(page.url());
    }
});

test('Edit Product(configurable)', async ({page}) => {
    await page.goto(`${config.baseUrl}/admin/login`);
    await page.getByPlaceholder('Email Address').click();
    await page.getByPlaceholder('Email Address').fill(config.adminEmail);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(config.adminPassword);
    await page.getByLabel('Sign In').click();
    await page.getByRole('link', { name: ' Catalog' }).click();
    await page.locator('div:nth-child(2) > div > div > div > .relative').first().click();
    await page.getByText('Clear All').first().click();
    await page.getByRole('button', { name: 'Select ' }).nth(2).click();
    await page.getByText('Grouped', { exact: true }).click();
    await page.getByRole('button', { name: 'Apply Filters' }).click();
    await page.locator('.row > div:nth-child(3) > div:nth-child(2) > a:nth-child(2)').first().click();
    await page.locator('.icon-delete').first().click();
    await page.getByText('Delete', { exact: true }).first().click();
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.getByText('Delete', { exact: true }).nth(2).click();
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.locator('#sku').click();
    await page.locator('#product_number').click();
    await page.locator('#product_number').fill('1234');
    await page.locator('#name').click();
    await page.locator('#name').fill('Demo_ajkshuyi');
    await page.locator('#short_description_ifr').contentFrame().locator('html').click();
    await page.locator('#short_description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_sdfhsiyu hsdgf');
    await page.locator('#description_ifr').contentFrame().locator('html').click();
    await page.locator('#description_ifr').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Demo_skdhff isudiu');
    await page.locator('#meta_title').click();
    await page.locator('#meta_title').fill('Demo_sdfiughfier');
    await page.locator('#meta_keywords').click();
    await page.locator('#meta_keywords').fill('Demo_sdghfyuweib');
    await page.locator('#meta_description').click();
    await page.locator('#meta_description').fill('Demo_sudfgiweuyb');
    await page.locator('label').filter({ hasText: 'Add Image png, jpeg, jpg' }).locator('div').click();
    //   await page.locator('body').setInputFiles('Screenshot from 2024-12-18 11-00-34.png');
    await page.locator('.secondary-button').first().click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Touchscreen Winter GlovesSKU - SP-003\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(1).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('arct');
    await page.locator('div').filter({ hasText: /^Arctic Warmth Wool Blend SocksSKU - SP-004\$21\.00100 Available$/ }).locator('label').click();
    await page.locator('div').filter({ hasText: /^Arctic Bliss Stylish Winter ScarfSKU - SP-002\$17\.00100 Available$/ }).locator('label').click();
    await page.locator('div:nth-child(6) > div:nth-child(4) > div:nth-child(2)').click();
    await page.getByText('Add Selected Product').click();
    await page.getByText('Add Product').nth(2).click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('Demo_shdgfyu');
    await page.getByText('Add Selected Product').click();
    await page.locator('label').filter({ hasText: 'Winter Wear' }).locator('span').click();
    await page.locator('label').filter({ hasText: 'Men' }).locator('span').click();
    await page.locator('div:nth-child(6) > .relative > label').click();
    await page.locator('div:nth-child(4) > .relative > label').click();
    await page.locator('#visible_individually').click();
    await page.locator('div:nth-child(3) > .relative > label').click();
    await page.locator('.relative > label').first().click();
    await page.locator('#color').click();
    await page.locator('#color').selectOption('2');
    await page.locator('#size').selectOption('7');
    await page.locator('.flex > div:nth-child(6) > div:nth-child(2)').click();
    await page.locator('.icon-uncheckbox').first().click();
    await page.getByText('Select Variants Color GreenColor BlackColor WhiteSize SSize MSize XL Select').click();
    await page.getByRole('button', { name: 'Select Action ' }).click();
    await page.getByText('Edit Names').click();
    await page.getByRole('button', { name: 'Agree', exact: true }).click();
    await page.locator('.icon-cross').click();
    await page.locator('.grid > .flex > div > .cursor-pointer').first().click();
    await page.locator('input[name="name"]').nth(1).click();
    await page.locator('input[name="name"]').nth(1).fill('Demo_Variant 2 6asdsad');
    await page.locator('input[name="sku"]').nth(1).click();
    await page.locator('input[name="sku"]').nth(1).click();
    await page.locator('input[name="sku"]').nth(1).fill('Demo_12we-variant-2-6sds');
    await page.locator('input[name="sku"]').nth(1).press('CapsLock');
    await page.locator('input[name="sku"]').nth(1).fill('Demo_12we-variant-2-6sdsWDW');
    await page.locator('input[name="price"]').click();
    await page.locator('input[name="price"]').fill('342234');
    await page.locator('select[name="status"]').selectOption('0');
    await page.locator('input[name="weight"]').click();
    await page.locator('input[name="weight"]').fill('0234');
    await page.locator('input[name="inventories\\[1\\]"]').click();
    await page.locator('input[name="inventories\\[1\\]"]').fill('023');
    await page.getByRole('button', { name: 'Save', exact: true }).click();

    try {
        const getError = await page.waitForSelector('.text-red-600.text-xs.italic', { timeout: 2000 }).catch(() => null);

        if (getError) {
            const errors = await page.$$eval('.text-red-600.text-xs.italic', els => els.map(el => el.innerText));
            errors.forEach(message => console.log(message));
        } else {
            await page.waitForSelector('.icon-toast-done', { timeout: 5000 });
            const message = await page.$eval('.icon-toast-done', el => el.parentNode.innerText);
            await page.click('.cursor-pointer.underline');
            console.log(message);
        }
    } catch(e) {
        console.log(page.url());
    }
});

test('Mass Delete Products', async ({page}) => {
    await page.goto(`${config.baseUrl}/admin/login`);
    await page.getByPlaceholder('Email Address').click();
    await page.getByPlaceholder('Email Address').fill(config.adminEmail);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(config.adminPassword);
    await page.getByLabel('Sign In').click();
    await page.getByRole('link', { name: ' Catalog' }).click();
    await page.getByText('Filter', { exact: true }).click();
    await page.getByText('Clear All').first().click();
    await page.getByRole('button', { name: 'Apply Filters' }).click();
    await page.locator('div > .icon-uncheckbox').first().click();
    await page.locator('div:nth-child(4) > div > .icon-uncheckbox').click();
    await page.locator('div').filter({ hasText: /^NameSKUAttribute Family$/ }).locator('label span').click();
    await page.locator('div').filter({ hasText: /^NameSKUAttribute Family$/ }).locator('label span').click();
    await page.getByRole('button', { name: 'Select Action ' }).click();
    await page.getByRole('link', { name: 'Delete' }).click();
    await page.getByRole('button', { name: 'Agree', exact: true }).click();

    try {
        await page.waitForSelector('.icon-toast-done', { timeout: 5000 });

        const message = await page.$eval('.icon-toast-done', el => el.parentNode.innerText);
        await page.click('.cursor-pointer.underline');

        console.log(message);
    } catch(e) {
        console.log(page.url());
    }
});

test('Mass Update Products', async ({page}) => {
    await page.goto(`${config.baseUrl}/admin/login`);
    await page.getByPlaceholder('Email Address').click();
    await page.getByPlaceholder('Email Address').fill(config.adminEmail);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(config.adminPassword);
    await page.getByLabel('Sign In').click();
    await page.getByRole('link', { name: ' Catalog' }).click();
    await page.locator('div > .icon-uncheckbox').first().click();
    await page.locator('div:nth-child(3) > div > .icon-uncheckbox').click();
    await page.locator('div:nth-child(4) > div > .icon-uncheckbox').click();
    await page.locator('div:nth-child(5) > div > .icon-uncheckbox').click();
    await page.getByRole('button', { name: 'Select Action ' }).click();
    await page.getByRole('link', { name: 'Active' }).click();
    await page.getByRole('button', { name: 'Agree', exact: true }).click();

    try {
        await page.waitForSelector('.icon-toast-done', { timeout: 5000 });

        const message = await page.$eval('.icon-toast-done', el => el.parentNode.innerText);
        await page.click('.cursor-pointer.underline');

        console.log(message);
    } catch(e) {
        console.log(page.url());
    }
});
