import { test, expect } from '@playwright/test'

test('fromListToDetails', async ({ page }) => {
	await page.goto('http://localhost:3000/')
	await expect(page.getByTestId('page-load')).toBeVisible()
	await page.getByRole('banner').locator('i').nth(3).click({ clickCount: 2 })
	await page.getByLabel('Recherchez des films', { exact: true }).fill('joker')
	await page.getByRole('link', { name: 'Joker Sortie le 2019/10/' }).click()
	await page.getByLabel("Nom d'utilisateur").click()
	await page.getByLabel("Nom d'utilisateur").fill('sdfsdfsdf')
	await page.getByLabel('Commentaire').click()
	await page.getByLabel('Commentaire').fill('sdfsdfsdfsdf')
	await page.getByRole('button', { name: 'Note de 8 sur' }).click()
	await page.getByRole('button', { name: 'Noter' }).click()
	await expect(page.getByRole('main')).toContainText('"sdfsdfsdfsdf"')
})
