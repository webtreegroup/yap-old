import { Block } from 'core/block'
import { Router } from 'core/router'
import { ILink } from './Link.types'
import { linkTmplRender } from './Link.tmpl'

export class Link extends Block<HTMLLinkElement> {
    constructor(props: ILink) {
        super(
            'a',
            props,
        )
    }

    createResources({ onClick, path }: ILink): void {
        this._element?.setAttribute('href', path || '#')

        function onClickWrapper(e: Event) {
            e.preventDefault()

            if (path) Router.go(path)

            onClick?.()
        }

        this._element?.addEventListener('click', onClickWrapper)
    }

    render(): string {
        return linkTmplRender(this.props)
    }
}
