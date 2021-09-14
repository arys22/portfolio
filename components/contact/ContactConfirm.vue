<template>
  <v-row justify="center" tag="section" align="center" class="contact">
    <h2 class="text-center text-uppercase my-4 contact__title">contact</h2>
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-form ref="form">
          <v-card-text>
            <p>お気軽にご連絡ください。</p>
            <v-text-field
              v-model="form.name"
              label="お名前"
              placeholder="10文字以内で入力してください"
              autocomplete="name"
              counter="10"
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
            <!-- placeholder="info@example.com" -->
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
              >全て削除</v-btn
            >
            <v-btn @click="check" x-large plain rounded block class="contact__btn--check">
              確認画面
            </v-btn>
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
      // 送信が成功したかどうかのフラグ
      // success: false,
      // エラー時
      error: false,
      // !!は二重否定 undefinedをfalseにするため
      required: v => !!v || "必ず入力してください", // 入力必須の制約
      limit_length: v =>
        (v && v.length <= 10) || "10文字以内で入力してください", // 文字数の制約
      emailRules: v =>
        /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/.test(
          v
        ) || "有効なアドレスを入力してください",
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
        // 入力値を初期化する
        this.$refs.form.reset();
      } else {
        this.error = true;
      }
    },
    reset() {
      this.$refs.form.reset();
      this.error = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.contact {
  &__title {
    width: 100%;
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
      &:hover {
        box-shadow: 0 0 4px #babbbd, -2px -2px 4px #fff;
      }
    }
    &--check {
      margin: 30px 0 52px;
      box-shadow: 0px 6px 14px #b5b6b6, -6px -6px 14px #fff;
      transition-duration: 0.2s;
      position: relative;
      &::after {
        content: "";
        width: 11px;
        height: 11px;
        border-top: 4px solid #000000de;
        border-right: 4px solid #000000de;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        opacity: 0.4;
        transition: transform 0.3s ease-out;
      }
      &:hover {
        box-shadow: 0 0 4px #babbbd, -2px -2px 4px #fff;
        &::after {
          transform: translateX(-2px) rotate(45deg);
          opacity: 0.6;
          animation: prompt 1.5s ease-in-out infinite;
        }
      }
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
.v-card__actions > .v-btn.contact__btn--check{
  padding-right: 23.1111111111px;
}
</style>
