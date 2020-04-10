import React from 'react'
import Social from './Social.js'
import Email from './Email.js'
import GithubLogo from '../Pictures/githublogo.png'
import LinkedInLogo from '../Pictures/linkedinlogo.png'
import MediumLogo from '../Pictures/mediumlogo.png'
import GmailLogo from '../Pictures/gmaillogo.jpg'
import ResumeLogo from '../Pictures/resumelogo.png'

export default function SocialLinks() {
    //links to github, linkedin, medium, resume and email
    return (
        <div id = 'social-container'>
            <Social
                link = 'https://medium.com/@tdonovan79'
                image = {MediumLogo}
                name = 'Medium'
            />
            <Social
                link = 'https://github.com/tdonovan79'
                image = {GithubLogo}
                name = 'GitHub'
            />
            <Social
                link = 'https://www.linkedin.com/in/thomasdonovan79/'
                image = {LinkedInLogo}
                name = 'LinkedIn'
            />
            <Social
                link = 'https://docs.google.com/document/d/1fQ4srjXILlLjiTWsMrHs_60Vu6VuHGQEt1PWg-1ddXI/export?format=pdf'
                image = {ResumeLogo}
                name = 'Résumé'
            />
            <Email
                image = {GmailLogo}
                name = 'Contact'
            />
        </div>
    )
}
