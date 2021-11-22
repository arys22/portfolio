<template>
  <v-row justify="center" tag="section" align="center" class="contact">
    <h2 class="text-center text-capitalize my-4 contact__title">
      <v-icon class="mr-1" color="black">mdi-email-outline</v-icon
      >お問い合わせ<br /><span class="text-subtitle-1">contact</span>
    </h2>
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card class="pt-4">
        <v-form ref="form" class="contact__form">
          <v-card-text>
            <p>お気軽にご連絡ください。</p>
            <p>
              自動で受付完了メールを送信いたします。<br />
              <span class="contact__comment"
                >※メールが届かない場合は、ご入力のメールアドレス違いや迷惑メール対策設定などをご確認のうえ、再度、お問い合わせをお願いいたします。</span
              >
            </p>
            <v-text-field
              v-model="form.name"
              label="お名前"
              placeholder="15文字以内で入力してください"
              autocomplete="name"
              counter="15"
              :rules="[required, limit_length]"
              required
              clearable
              clear-icon="mdi-close-circle"
              prepend-inner-icon="mdi-account"
              name="name"
              class="my-5"
            ></v-text-field>

            <v-text-field
              v-model="form.email"
              label="メールアドレス"
              placeholder="sample@sample.com"
              hint="sample@sample.com"
              persistent-hint
              autocomplete="email"
              type="email"
              :rules="[required, emailRules]"
              required
              clearable
              clear-icon="mdi-close-circle"
              prepend-inner-icon="mdi-email"
              name="email"
              class="my-5"
            ></v-text-field>

            <v-textarea
              :rules="[required]"
              v-model="form.content"
              label="お問い合わせ内容"
              placeholder="お気軽にお問い合わせください。"
              class="mt-10"
              outlined
              counter
              no-resize
              rows="7"
              required
              auto-grow
              clearable
              clear-icon="mdi-close-circle"
              prepend-inner-icon="mdi-comment"
            ></v-textarea>
            <p class="contact__error" v-show="error">
              <v-icon>mdi-checkbox-marked-circle</v-icon>
              入力内容をご確認ください。
            </p>
          </v-card-text>
          <v-card-actions class="contact__actions">
            <v-btn @click="reset" plain class="contact__btn--reset"
              >削除<v-icon class="contact__btn--icon">mdi-close</v-icon></v-btn
            >
            <Btn @click.native="check" class="my-13 pr-6">入力内容確認画面</Btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      // 各テキストボックスの値
      form: {
        name: "",
        email: "",
        content: ""
      },
      // エラー時
      error: false,
      // !!は二重否定 undefinedをfalseにするため
      required: v => !!v || "必ず入力してください", // 入力必須の制約
      limit_length: v =>
        (v && v.length <= 15) || "15文字以内で入力してください", // 文字数の制約
      emailRules: v =>
        /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/.test(
          v
        ) || "有効なアドレスを入力してください"
      // /.+@.+\..+/
    };
  },
  mounted() {
    // バリデーションをリセット
    this.$refs.form.resetValidation();
  },
  methods: {
    // 送信を試みるメソッド（「送信する」がクリックされたときに呼ばれる）
    check() {
      if (this.$refs.form.validate()) {
        // すべてのバリデーションが通過したときのみ
        // 確認画面に遷移して送る
        this.$router.push({
          path: "/confirm",
          query: {
            name: this.form.name,
            email: this.form.email,
            content: this.form.content
          }
        });
      } else {
        this.error = true;
      }
    },
    reset() {
      // 入力値を初期化する
      this.$refs.form.reset();
      this.error = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.contact {
  padding: 15px 0 100px;
  background-color: #f6f6f6;
  &__title {
    width: 100%;
    line-height: 1;
    z-index: 1;
  }
  &__form {
    z-index: 1;
  }
  &__comment {
    font-size: 0.7rem;
  }
  &__error {
    transition: all 0.3s ease;
    margin-bottom: -24px;
    font-weight: bold;
    display: flex;
    height: 24px;
    align-items: flex-end;
  }
  &__actions {
    align-items: flex-end;
    flex-direction: column;
  }
  &__btn {
    &--reset {
      box-shadow: 0px 1px 5px #b5b6b6, -5px -5px 5px #fff;
      transition-duration: 0.2s;
      background-color: #fff;
      &:hover {
        box-shadow: 0 0 4px #babbbd, -2px -2px 4px #fff;
        background-color: #fcfcfc;
      }
    }
    &--icon {
      font-size: 20px;
      margin: 0 0 2px 3px;
    }
  }
}
@keyframes prompt {
  0% {
    transform: translateX(-1px) rotate(45deg);
  }
  50% {
    transform: translateX(4px) rotate(45deg);
  }
  100% {
    transform: translateX(-1px) rotate(45deg);
  }
}
</style>
