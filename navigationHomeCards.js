import { LightningElement, api } from 'lwc';

export default class KnowhowArticles extends LightningElement {
    @api image1;
    @api secondImage1;
    @api title1;
    @api content1;
    @api link1;
    @api isHovered1 = false;

    @api image2;
    @api secondImage2;
    @api title2;
    @api content2;
    @api link2;
    @api isHovered2 = false;

    @api image3;
    @api secondImage3;
    @api title3;
    @api content3;
    @api link3;
    @api isHovered3 = false;

    @api image4;
    @api secondImage4;
    @api title4;
    @api content4;
    @api link4;
    @api isHovered4 = false;

    @api image5;
    @api secondImage5;
    @api title5;
    @api content5;
    @api link5;
    @api isHovered5 = false;

    @api image6;
    @api secondImage6;

    @api backgroundColor1;
    @api backgroundColor2;
    @api hoverBackgroundColor1;
    @api hoverBackgroundColor2;
    @api borderBottomColor;

    get tileClass1() {
        return this.isHovered1 ? 'knowhow-tile hovered' : 'knowhow-tile';
    }

    get tileStyle1() {
        const normalBackgroundStyle = `background: linear-gradient(to top right, ${this.backgroundColor1} 50%, ${this.backgroundColor2} 50%); border-bottom: 5px solid ${this.borderBottomColor}`;
        const hoverBackgroundStyle = `background: linear-gradient(to top right, ${this.hoverBackgroundColor1} 50%, ${this.hoverBackgroundColor2} 50%);`;

        return this.isHovered1 ? `${normalBackgroundStyle} transition: 0.3s; ${hoverBackgroundStyle}` : normalBackgroundStyle;
    }

    handleMouseEnter1() {
        this.isHovered1 = true;
    }

    handleMouseLeave1() {
        this.isHovered1 = false;
    }

    get tileClass2() {
        return this.isHovered2 ? 'knowhow-tile hovered' : 'knowhow-tile';
    }

    get tileStyle2() {
        const normalBackgroundStyle = `background: linear-gradient(to top right, ${this.backgroundColor1} 50%, ${this.backgroundColor2} 50%); border-bottom: 5px solid ${this.borderBottomColor}`;
        const hoverBackgroundStyle = `background: linear-gradient(to top right, ${this.hoverBackgroundColor1} 50%, ${this.hoverBackgroundColor2} 50%);`;

        return this.isHovered2 ? `${normalBackgroundStyle} transition: 0.3s; ${hoverBackgroundStyle}` : normalBackgroundStyle;
    }

    handleMouseEnter2() {
        this.isHovered2 = true;
    }

    handleMouseLeave2() {
        this.isHovered2 = false;
    }

    get tileClass3() {
        return this.isHovered3 ? 'knowhow-tile hovered' : 'knowhow-tile';
    }

    get tileStyle3() {
        const normalBackgroundStyle = `background: linear-gradient(to top right, ${this.backgroundColor1} 50%, ${this.backgroundColor2} 50%); border-bottom: 5px solid ${this.borderBottomColor}`;
        const hoverBackgroundStyle = `background: linear-gradient(to top right, ${this.hoverBackgroundColor1} 50%, ${this.hoverBackgroundColor2} 50%);`;

        return this.isHovered3 ? `${normalBackgroundStyle} transition: 0.3s; ${hoverBackgroundStyle}` : normalBackgroundStyle;
    }

    handleMouseEnter3() {
        this.isHovered3 = true;
    }

    handleMouseLeave3() {
        this.isHovered3 = false;
    }

    get tileClass4() {
        return this.isHovered4 ? 'knowhow-tile hovered' : 'knowhow-tile';
    }

    get tileStyle4() {
        const normalBackgroundStyle = `background: linear-gradient(to top right, ${this.backgroundColor1} 50%, ${this.backgroundColor2} 50%); border-bottom: 5px solid ${this.borderBottomColor}`;
        const hoverBackgroundStyle = `background: linear-gradient(to top right, ${this.hoverBackgroundColor1} 50%, ${this.hoverBackgroundColor2} 50%);`;

        return this.isHovered4 ? `${normalBackgroundStyle} transition: 0.3s; ${hoverBackgroundStyle}` : normalBackgroundStyle;
    }

    handleMouseEnter4() {
        this.isHovered4 = true;
    }

    handleMouseLeave4() {
        this.isHovered4 = false;
    }

    get tileClass5() {
        return this.isHovered5 ? 'knowhow-tile hovered' : 'knowhow-tile';
    }

    get tileStyle5() {
        const normalBackgroundStyle = `background: linear-gradient(to top right, ${this.backgroundColor1} 50%, ${this.backgroundColor2} 50%); border-bottom: 5px solid ${this.borderBottomColor}`;
        const hoverBackgroundStyle = `background: linear-gradient(to top right, ${this.hoverBackgroundColor1} 50%, ${this.hoverBackgroundColor2} 50%);`;

        return this.isHovered5 ? `${normalBackgroundStyle} transition: 0.3s; ${hoverBackgroundStyle}` : normalBackgroundStyle;
    }

    handleMouseEnter5() {
        this.isHovered5 = true;
    }

    handleMouseLeave5() {
        this.isHovered5 = false;
    }
}
